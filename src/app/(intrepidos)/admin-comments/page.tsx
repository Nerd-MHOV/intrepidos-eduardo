"use client";

import { getAllComments, updateCommentResponse, deleteComment } from "@/app/(intrepidos)/actions";
import { comments } from "@prisma/client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ADMIN_PASSWORD = "intrepidos2025"; // Senha hardcoded

export default function AdminComments() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [comments, setComments] = useState<comments[]>([]);
  const [loading, setLoading] = useState(false);
  const [responseTexts, setResponseTexts] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    if (isAuthenticated) {
      loadComments();
    }
  }, [isAuthenticated]);

  const loadComments = async () => {
    setLoading(true);
    try {
      const data = await getAllComments();
      setComments(data);
    } catch (error) {
      console.error("Erro ao carregar comentários:", error);
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Senha incorreta!");
      setPassword("");
    }
  };

  const handleResponse = async (commentId: number) => {
    const responseText = responseTexts[commentId];
    if (!responseText) return;

    try {
      await updateCommentResponse(commentId, responseText);
      setResponseTexts({ ...responseTexts, [commentId]: "" });
      loadComments(); // Recarrega a lista
      alert("Resposta adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao responder comentário:", error);
      alert("Erro ao responder comentário");
    }
  };

  const handleDelete = async (commentId: number) => {
    if (!confirm("Tem certeza que deseja excluir este comentário?")) return;

    try {
      await deleteComment(commentId);
      loadComments(); // Recarrega a lista
      alert("Comentário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir comentário:", error);
      alert("Erro ao excluir comentário");
    }
  };

  const handleResponseTextChange = (commentId: number, text: string) => {
    setResponseTexts({ ...responseTexts, [commentId]: text });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Área de Moderação
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite a senha"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Moderação de Comentários</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sair
          </button>
        </div>

        {loading ? (
          <div className="text-center">Carregando comentários...</div>
        ) : (
          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-center">Nenhum comentário encontrado.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{comment.name}</h3>
                      <p className="text-gray-400 text-sm">{comment.email}</p>
                      <p className="text-gray-500 text-xs">
                        {comment.productId === "home" ? "Página Inicial" : `Produto: ${comment.productId}`}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {new Date(comment.createdAt).toLocaleString("pt-BR")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Excluir
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-200">{comment.message}</p>
                    {comment.image && (
                      <Image
                        src={comment.image}
                        alt="Imagem do comentário"
                        className="mt-2 rounded max-w-md"
                        width={300}
                        height={300}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>

                  {comment.response ? (
                    <div className="bg-green-900/30 p-3 rounded border-l-4 border-green-500">
                      <p className="text-green-400 font-semibold text-sm">Sua resposta:</p>
                      <p className="text-green-100">{comment.response}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <textarea
                        value={responseTexts[comment.id] || ""}
                        onChange={(e) => handleResponseTextChange(comment.id, e.target.value)}
                        placeholder="Digite sua resposta..."
                        className="w-full p-3 bg-gray-700 text-white rounded resize-none"
                        rows={3}
                      />
                      <button
                        onClick={() => handleResponse(comment.id)}
                        disabled={!responseTexts[comment.id]}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Responder
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}