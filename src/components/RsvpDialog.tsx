"use client";

import React from "react";
import { createRsvp } from "@/app/(intrepidos)/actions";
import { cn } from "@/lib/utils";

type Props = {
  source: string; // e.g. "banner" | "popup"
  buttonText?: string;
  buttonClassName?: string;
};

const RsvpDialog: React.FC<Props> = ({
  source,
  buttonText = "Confirmar Presença",
  buttonClassName,
}) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name || !whatsapp) {
      setError("Preencha nome e WhatsApp");
      return;
    }
    setLoading(true);
    try {
      await createRsvp({ name, whatsapp, source });
      setSuccess("Confirmação registrada! Obrigado.");
      setName("");
      setWhatsapp("");
      setTimeout(() => setOpen(false), 900);
    } catch {
      setError("Falha ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg",
          buttonClassName
        )}
      >
        {buttonText}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-black/70 cursor-default"
            onClick={() => setOpen(false)}
            onKeyDown={(ev) => {
              if (ev.key === "Escape") setOpen(false);
            }}
          />
          <dialog
            open
            className="relative z-[61] w-full max-w-md bg-zinc-900 text-white rounded-xl border border-green-500/30 shadow-2xl p-6"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-green-400">
                Confirmar presença
              </h3>
              <p className="text-sm text-zinc-300">
                Preencha seus dados para confirmar sua presença no evento.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="rsvp-name"
                  className="block text-sm text-zinc-300"
                >
                  Nome
                </label>
                <input
                  id="rsvp-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="rsvp-whatsapp"
                  className="block text-sm text-zinc-300"
                >
                  WhatsApp
                </label>
                <input
                  id="rsvp-whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-green-400 text-sm">{success}</p>}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-3 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white py-3 rounded-lg transition-colors"
                >
                  {loading ? "Enviando..." : "Confirmar"}
                </button>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default RsvpDialog;
