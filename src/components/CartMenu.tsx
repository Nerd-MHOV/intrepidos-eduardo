"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatToReal } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import {
  decrementQty,
  incrementQty,
  // removeAllProductsFromCart, // TODO: Success page to clear cart
  removeProductFromCart,
} from "@/store/slices/cartSlice";
import {
  Loader2,
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trash,
} from "lucide-react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { createCheckoutSession } from "@/app/produto/[id]/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function CartMenu() {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const { mutate: createPaymentSession, isPending: loading } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url);
      else throw new Error("Unable tto retrieve payment URL.");
    },
    onError: () => {
      toast.error("Erro ao processar produtos, por favor tente novamente.");
    },
  });

  async function checkout() {
    createPaymentSession({ products: cartItems, frete: 100, cep: "00000000" });
  }

  function handleRemove(id: string) {
    dispatch(removeProductFromCart(id));
  }
  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-green-800 relative"
          id="button-cart"
        >
          <ShoppingCart className="text-lime-700 dark:text-lime-500" />
          <span className="sr-only">Cart</span>
          {cartItems.length > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-400/40  rounded-full -top-1 end-7 dark:border-gray-900">
              {cartItems.length.toString().padStart(2, "0")}
            </div>
          )}
        </Button>
      </SheetTrigger>
      {cartItems && cartItems.length > 0 ? (
        <SheetContent className="w-full sm:w-[540px]  bg-black/20 border-gray-800 backdrop-blur-lg text-white">
          <SheetHeader>
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 border-b pb-3">
              Seu Carrinho ({cartItems.length})
            </h2>
          </SheetHeader>
          {/* CONTENT HWRE */}
          <div className="">
            {cartItems.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between gap-4 py-3 border-b "
                >
                  <Image
                    width={200}
                    height={200}
                    alt="cart image"
                    src={item.image}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xs flex items-center text-red-400"
                    >
                      <Trash className="w-4 h-4 mr-1" />
                      <span>Remove</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-sx">{formatToReal(item.price)}</h2>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => {
                          dispatch(decrementQty(item.id));
                        }}
                        className="border shadow rounded flex items-center justify-center w-7 h-5"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <p>{item.qty}</p>
                      <button
                        onClick={() => {
                          dispatch(incrementQty(item.id));
                        }}
                        className="border shadow rounded flex items-center justify-center w-7 h-5 bg-zinc-900 text-white"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="space-y-1 py-3 border-b mb-3 mt-10">
              <div className="flex items-center justify-between text-sm">
                <h2 className="font-medium">Total</h2>
                <p>{formatToReal(totalSum)}</p>
              </div>
            </div>
          </div>
          <SheetFooter className="gap-2 mt-10">
            {!loading && (
              <SheetClose asChild>
                <Button variant={"secondary"} type="submit">
                  Continue Comprando
                </Button>
              </SheetClose>
            )}
            {loading ? (
              <Button
                disabled
                className="bg-green-700 text-white hover:bg-green-800 rounded w-full"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </Button>
            ) : (
              <Button
                onClick={checkout}
                className="bg-green-700 text-white hover:bg-green-800 rounded w-full"
              >
                <ShoppingBag /> Comprar
              </Button>
            )}
          </SheetFooter>
        </SheetContent>
      ) : (
        <SheetContent className="w-full sm:w-[540px] bg-black/20 border-gray-800 backdrop-blur-lg text-white">
          <SheetHeader>
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 border-b pb-3">
              Carrinho Vazio
            </h2>
          </SheetHeader>
          {/* CONTENT HWRE */}
          <div className="min-h-80  flex-col space-y-4 flex items-center justify-center">
            <ShoppingCart width={180} height={180} className="my-5 mr-5" />
            <h2>Ache alguma coisa que goste</h2>
          </div>
          <SheetFooter>
            <div className="w-full flex justify-center mt-5">
              <SheetClose asChild>
                <Button
                  type="submit"
                  className="bg-green-900 hover:bg-green-800"
                >
                  Continue comprando!
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      )}
    </Sheet>
  );
}
