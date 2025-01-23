"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/framer-motion";
import { Check, Star } from "lucide-react";
import Image from "next/image";

const HomeHighlights = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideIn("right")}
      className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
    >
      <ul className="space-y-4 text-left font-medium flex flex-col items-center sm:items-start">
        <div className="space-y-4 text-white">
          <li className="flex gap-2 items-center text-left">
            <Check className="h-6 w-6 shrink-0 text-green-600" />
            Emoção em cada capítulo
          </li>
          <li className="flex gap-2 items-center text-left">
            <Check className="h-6 w-6 shrink-0 text-green-600" />
            Batalhas Eletrizantes
          </li>
          <li className="flex gap-2 items-center text-left">
            <Check className="h-6 w-6 shrink-0 text-green-600" />
            Desenvolvimento dos personagens
          </li>
        </div>
      </ul>
      <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex -space-x-4">
          <Image
            src="/users/user-1.png"
            alt="user image"
            width={50}
            height={50}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
          />
          <Image
            src="/users/user-2.png"
            alt="user image"
            width={50}
            height={50}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
          />
          <Image
            src="/users/user-3.png"
            alt="user image"
            width={50}
            height={50}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
          />
          <Image
            src="/users/user-4.jpg"
            alt="user image"
            width={50}
            height={50}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
          />
          <Image
            src="/users/user-5.jpg"
            alt="user image"
            width={50}
            height={50}
            className="inline-block h-12 w-12 object-cover rounded-full ring-2 ring-slate-100"
          />
        </div>

        <div className="flex flex-col justify-between items-center sm:items-start">
          <div className="flex gap-1">
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
          </div>

          <p className="text-white mt-2">
            <span className="font-semibold">+1.250</span> Leitores
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeHighlights;
