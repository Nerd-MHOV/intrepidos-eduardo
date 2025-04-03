"use client";
import { createComment } from "@/app/produto/[id]/actions";
import { comments } from "@prisma/client";
import Image from "next/image";
import React from "react";

const Comments = ({
  comments,
  productId,
}: {
  comments: comments[];
  productId: string;
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
      await createComment({
        productId: productId,
        message: newComment,
        image: image,
        email: email,
        name: nome,
      });
      setNewComment("");
      setImage(null);
      setIsLoading(false);
    }
  };
  return (
    <div className="mb-32">
      <h1 className="mt-2 text-zinc-200 text-4xl text-center font-bold tracking-tight sm:text-5xl">
        Area do Fãn
      </h1>

      <>
        <section className="mt-6">
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="p-4 bg-zinc-700 rounded">
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
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-zinc-400">Nenhum comentário, sejá o primeiro!</p>
          )}
        </section>

        <section className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-zinc-700 p-6 rounded"
          >
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome..."
              className="p-3 bg-zinc-600 text-zinc-200 rounded resize-none"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="p-3 bg-zinc-600 text-zinc-200 rounded resize-none"
              required
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Digite seu comentário..."
              className="p-3 bg-zinc-600 text-zinc-200 rounded resize-none"
              required
              rows={4}
            />

            <div className="flex flex-col">
              <label
                htmlFor="image"
                className="px-4 py-2 bg-zinc-700 text-white rounded cursor-pointer text-center hover:bg-zinc-800 transition-colors"
              >
                {image ? `Imagem selecionada: ${image.name}` : "Anexar imagem"}
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
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              {isLoading ? "Enviando..." : "Enviar comentário"}
            </button>
          </form>
        </section>
      </>
    </div>
  );
};

export default Comments;
