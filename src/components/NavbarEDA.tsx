import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const NavbarEDA = async () => {
  return (
    <nav className="sticky z-[10] h-14 inset-x-0 top-0 w-full border-b border-gray-800 bg-black/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-800">
          <Link
            href="/"
            className="flex z-40 font-semibold text-white"
            style={{
              background: "linear-gradient(to bottom right, blue, white)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ECOS DO ALÉM
          </Link>
          {/* <Button variant={"ghost"} className="hover:bg-green-800">
            <ShoppingCart className="text-white" />
          </Button> */}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavbarEDA;
