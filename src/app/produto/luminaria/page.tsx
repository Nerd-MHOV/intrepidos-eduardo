import React from "react";
import DesignLuminaria from "./design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = () => {
  return (
    <div className="min-h-screen">
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
        <DesignLuminaria />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
