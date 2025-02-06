"use client";
import { useAppDispatch } from "@/store/hooks/hooks";
import { removeAllProductsFromCart } from "@/store/slices/cartSlice";

const Page = () => {
  const dispatch = useAppDispatch();
  dispatch(removeAllProductsFromCart());
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 min-h-[calc(100vh-95px)]">
      <div className="bg-black/20 p-10 rounded backdrop-blur-xl">
        <div className="max-w-xl">
          <p className="text-base fonte-medium text-primary">Muito Obrigado!</p>
          <h1 className="mt-2 text-zinc-200 text-4xk font-bold tracking-tight sm:text-5xl">
            Seu pedido esta a caminho!
          </h1>
          <p className="mt-2 text-base text-zinc-400">
            Nós recebemos seu pedido e estamos preparando ele para envio.
          </p>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto  flex-col">
            <h4 className="font-semibold text-zinc-200">
              Você fez uma ótima escolha!
            </h4>
            <p className="mt-2 text-base text-zinc-400">
              E lembre-se, fique atento ao seu email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
