import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#121212] w-full text-center text-[#ccc] text-sm p-2 relative">
      <a href="https://github.com/Nerd-MHOV">
        <p>
          Copyright @ 2025 Matheus Henrique. Todos os direitos Reservados.
        </p>
      </a>
      {/* Link escondido para moderação */}
      <Link href="/admin-comments" className="absolute bottom-1 right-2 w-2 h-2 bg-transparent hover:bg-gray-700 rounded-full opacity-10 hover:opacity-50 transition-all duration-300" title="">
        <span className="sr-only">Admin</span>
      </Link>
    </div>
  );
};

export default Footer;
