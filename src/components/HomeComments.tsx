"use client";
import { createHomeComment } from "@/app/(intrepidos)/actions";
import { comments } from "@prisma/client";
import Image from "next/image";
import React from "react";

const HomeComments = ({
  comments,
}: {
  comments: comments[];
}) => {
  const [newComment, setNewComment] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [image, setImage] = React.useState<File | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    if (newComment) {
      await createHomeComment({
        message: newComment,
        image: image,
        email: email,
        name: nome,
      });
      setNewComment("");
      setEmail("");
      setNome("");
      setImage(null);
      setIsLoading(false);
    }
  };
  
  return (
    <div className="mb-16 bg-black/60 backdrop-blur-lg p-8 text-white">
      <h1 className="mt-2 text-zinc-200 text-3xl text-center font-bold tracking-tight sm:text-4xl">
        Área de Comentários
      </h1>

      <>
        <section className="mt-6 max-w-4xl mx-auto">
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="p-4 bg-zinc-700/50 backdrop-blur rounded">
                  <h3 className="text-bold text-sm text-zinc-400">
                    {comment.name}
                  </h3>
                  <p className="text-zinc-200">{comment.message}</p>
                  {comment.image && (
                    <Image
                      src={comment.image}
                      alt="Imagem do comentário"
                      className="mt-2 rounded"
                      width={300}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  {comment.response && (
                    <div className="mt-2 p-2 bg-green-900/30 rounded border-l-2 border-green-500">
                      <p className="text-xs text-green-400 font-semibold">Resposta do autor:</p>
                      <p className="text-green-100">{comment.response}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-zinc-400 text-center">Nenhum comentário ainda, seja o primeiro!</p>
          )}
        </section>

        <section className="mt-8 max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-zinc-700/50 backdrop-blur p-6 rounded"
          >
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome..."
              className="p-3 bg-zinc-600/70 text-zinc-200 rounded resize-none placeholder:text-zinc-400"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              type="email"
              className="p-3 bg-zinc-600/70 text-zinc-200 rounded resize-none placeholder:text-zinc-400"
              required
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Digite seu comentário..."
              className="p-3 bg-zinc-600/70 text-zinc-200 rounded resize-none placeholder:text-zinc-400"
              required
              rows={4}
            />

            <div className="flex flex-col">
              <label
                htmlFor="image"
                className="px-4 py-2 bg-zinc-700/70 text-white rounded cursor-pointer text-center hover:bg-zinc-800/70 transition-colors"
              >
                {image ? `Imagem selecionada: ${image.name}` : "Anexar imagem (opcional)"}
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Enviando..." : "Enviar comentário"}
            </button>
          </form>
        </section>
      </>
    </div>
  );
};

export default HomeComments;