"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import React from "react";

const ButtonAlem = () => {
  return (
    <Button
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
      onClick={() =>
        window.open(
          "https://ebookbox.com.br/app/busca.php?q=eduardo&fbclid=IwY2xjawKyzJ5leHRuA2FlbQIxMQABHtOC_Ods6lL08mvisWMrAfcx4mPXaEz-JoqDc92o4cn_brcqep-76QIInBnE_aem_fOHQXo1-VGq4DR6W8tHOfg&sfnsn=wiwspwa",
          "_blank"
        )
      }
    >
      <ShoppingBag className="mr-2" />
      Adquira o seu
    </Button>
  );
};

export default ButtonAlem;
