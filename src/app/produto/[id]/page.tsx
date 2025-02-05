import React from "react";
import DesignPage from "../../../components/design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Products } from "../products/products";
import { notFound } from "next/navigation";

const Page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const product = Products.find((product) => product.id === id);

  console.log(product);
  if (!product) return notFound();

  return (
    <div className="min-h-[calc(100vh-172px)] ">
      <div
        className="absolute h-full w-full left-0 top-0 z-0"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
          backgroundImage: "url(/bg2.svg)",
          width: "100%",
          height: "100vh",
        }}
      />
      <MaxWidthWrapper>
        <DesignPage product={product}>
          <product.side />
        </DesignPage>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
