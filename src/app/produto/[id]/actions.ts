"use server";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/slices/cartSlice";
import { Products } from "../products/products";
import CEP from "cep-promise";
export const createCheckoutSession = async ({
  products,
  frete,
  cep,
}: {
  products: CartItem[];
  frete: {
    price: number;
    delivery_range: { min: number; max: number };
  };
  cep: string;
}) => {
  const line_items = await Promise.all(
    products.map(async (product) => {
      const price = Products.find((p) => p.id === product.id)?.price;
      if (!price) throw new Error("Product not found");
      const stripeProduct = await stripe.products.create({
        name: `${product.name} - ${product.type}`,
        images: [`${process.env.BASE_URL}/${product.image}`],
        default_price_data: {
          currency: "brl",
          unit_amount: price * 100,
        },
      });

      return {
        price: stripeProduct.default_price as string,
        quantity: product.qty,
      };
    })
  );

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.BASE_URL}/order/success`,
    cancel_url: `${process.env.BASE_URL}`,
    payment_method_types: ["card"],
    mode: "payment",
    phone_number_collection: {
      enabled: true,
    },
    shipping_address_collection: {
      allowed_countries: ["BR"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: frete.price * 100,
            currency: "brl",
          },
          display_name: "Entrega Expressa",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: frete.delivery_range.min + 2,
            },
            maximum: {
              unit: "business_day",
              value: frete.delivery_range.max + 2,
            },
          },
        },
      },
    ],
    payment_intent_data: {
      metadata: {
        products: JSON.stringify(products),
        frete: JSON.stringify(frete),
        cep: JSON.stringify(cep),
      },
    },
    line_items,
  });

  return { url: stripeSession.url };
};

export const calcFrete = async ({
  cep,
  products,
}: {
  cep: string;
  products: CartItem[];
}) => {
  if (cep.length < 8) throw new Error("CEP inválido");
  const sanitizedCep = cep.replace(/\D/g, "");
  const cepValidate = await CEP(sanitizedCep);
  if (!cepValidate) throw new Error("CEP inválido");

  const freteProducts = products.map((p) => {
    const product = Products.find((product) => product.id === p.id);
    if (!product) throw new Error("Product not found");
    return {
      id: product.id,
      width: product.correios.width,
      height: product.correios.height,
      length: product.correios.length,
      weight: product.correios.weight,
      insurance_value: product.correios.insurance_value,
      quantity: p.qty,
    };
  });
  const url = "https://www.melhorenvio.com.br/api/v2/me/shipment/calculate";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: process.env.MELHORENVIO_API_KEY || "",
      "User-Agent": "Aplicação (email para contato técnico)",
    },
    body: JSON.stringify({
      from: { postal_code: "17380970" },
      to: { postal_code: "01018020" },
      products: freteProducts,
    }),
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Erro ao calcular frete");
  const frete = await response.json();
  let returnFrete;

  returnFrete = frete.find((f: { name: string }) => f.name === "PAC");

  if (!returnFrete || !returnFrete.price)
    returnFrete = frete.find((f: { name: string }) => f.name === "SEDEX");

  if (!returnFrete || !returnFrete.price)
    throw new Error("Erro ao calcular frete");

  return {
    price: +returnFrete.price,
    delivery_range: {
      min: returnFrete.delivery_range.min,
      max: returnFrete.delivery_range.max,
    },
  };
};
