"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const LaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Data do lançamento: 25/10
    const launchDate = new Date("2025-10-25");
    const currentDate = new Date();
    const isBeforeLaunch = currentDate < launchDate;

    if (!isBeforeLaunch) {
      setShouldShow(false);
      return;
    }

    // Verifica se o popup já foi fechado hoje
    const today = currentDate.toDateString();
    const lastClosed = localStorage.getItem("launch-popup-closed");
    
    if (lastClosed !== today) {
      setShouldShow(true);
      // Delay para mostrar o popup após carregamento da página
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Salva que o popup foi fechado hoje
    const today = new Date().toDateString();
    localStorage.setItem("launch-popup-closed", today);
  };

  if (!shouldShow || !isOpen) {
    return null;
  }

  // Calcula dias restantes
  const launchDate = new Date("2025-10-25");
  const currentDate = new Date();
  const diffTime = launchDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <div 
          className="bg-black/95 backdrop-blur-lg text-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-green-500/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão fechar */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full p-2 transition-colors border border-zinc-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-6">
            {/* Cabeçalho */}
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                🎉 LANÇAMENTO OFICIAL! 🎉
              </h2>
              <p className="text-lg text-zinc-200">
                Eduardo Cagnotto apresenta <span className="font-bold text-green-300">Intrépidos</span>
              </p>
            </div>

            {/* Imagem */}
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                <Image
                  src="/lancamento-oficial.jpg"
                  alt="Lançamento Oficial - Intrépidos"
                  fill
                  className="object-contain rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Informações do evento */}
            <div className="space-y-4 text-center">
              <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">
                  📅 25 de Outubro às 20h
                </p>
              </div>

              <div className="bg-zinc-800/70 backdrop-blur p-4 rounded-lg border border-zinc-600">
                <p className="font-semibold mb-2 text-green-400">📍 Local:</p>
                <p className="text-lg font-bold text-zinc-100">Bar e Restaurante Camilo</p>
                <p className="text-sm text-zinc-300">Mezanino</p>
                <p className="text-sm mt-2 text-zinc-300">
                  Praça Amador Simões, 61, Centro<br />
                  Brotas - SP, 17380-000
                </p>
              </div>

              {/* Contador regressivo */}
              <div className="bg-zinc-800 border-2 border-green-500 p-4 rounded-lg">
                <p className="text-lg font-bold text-zinc-100">
                  ⏰ Faltam apenas <span className="text-2xl text-green-400">{diffDays}</span> dia{diffDays !== 1 ? 's' : ''}!
                </p>
              </div>

              <div className="text-sm text-zinc-300">
                <p>🖊️ Sessão de autógrafos</p>
                <p>📚 Exemplares disponíveis no local</p>
                <p>☕ Ambiente acolhedor</p>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-6 shadow-lg"
              >
                Entendi! Estarei lá! ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchPopup;