"use server";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/slices/cartSlice";

export const createCheckoutSession = async ({
  products,
  frete,
  cep,
}: {
  products: CartItem[];
  frete: number;
  cep: string;
}) => {
  const line_items = await Promise.all(
    products.map(async (product) => {
      const stripeProduct = await stripe.products.create({
        name: product.name,
        images: [`${process.env.BASE_URL}/${product.image}`],
        default_price_data: {
          currency: "brl",
          unit_amount: product.price * 100,
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
            amount: frete * 100,
            currency: "brl",
          },
          display_name: "Entrega Expressa",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
    ],
    metadata: {
      products: JSON.stringify(products),
      frete,
      cep,
    },
    line_items,
  });

  return { url: stripeSession.url };
};
