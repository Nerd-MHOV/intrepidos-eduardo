"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import CaroselImages from "@/components/CaroselImages";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/store/hooks/hooks";
import { addProductToCart } from "@/store/slices/cartSlice";
import { formatToReal } from "@/lib/utils";
import { Products } from "@/app/produto/products/products";

const DesignPage = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: (typeof Products)[number];
}) => {
  const params = useSearchParams();

  const dispatch = useAppDispatch();
  function handleAdd() {
    const defaultType = Products.find((p) => p.id === product.id)?.object[0]
      .value;

    const type = params.get("color") || defaultType || "default";
    const imageIndex = params.get("image") || 0;
    const newCartItem = {
      id: product.id,
      type: type,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.images[+imageIndex].image,
    };
    dispatch(addProductToCart(newCartItem));
    const cartTarget = document?.getElementById(
      "button-cart"
    ) as HTMLElement | null;
    (cartTarget as HTMLElement)?.click();
  }

  return (
    <>
      <div className="relative mt-20 grid text-pin grid-cols-1 lg:grid-cols-3 mb-20  border-2 border-gray-800 overflow-hidden rounded-lg  bg-black/75 backdrop-blur-lg transition-all ">
        <CaroselImages images={product.images} />
        <div className="h-[37rem] w-full col-span-full lg:col-span-1 flex flex-col">
          <ScrollArea className="relative flex-1 overflow-auto text-white">
            <div
              aria-hidden="true"
              className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black pointer-events-none"
            />

            {children}
          </ScrollArea>

          <div className="w-full px-8 h-16 bg-black">
            <div className="h-px w-full bg-zinc-200" />
            <div className="w-full h-full flex justify-end items-center">
              <div className="w-full flex gap-6 items-center">
                <p className="font-medium whitespace-nowrap text-white">
                  {formatToReal(product.price)}
                </p>

                <Button
                  onClick={handleAdd}
                  className="bg-green-700 text-white hover:bg-green-800 rounded w-full"
                >
                  <ShoppingBag /> Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
