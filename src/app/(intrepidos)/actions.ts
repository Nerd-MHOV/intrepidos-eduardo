"use server";

import { db } from "@/lib/db";
import { revalidateTag, unstable_cache } from "next/cache";

export const getHomeComments = unstable_cache(
  async () => {
    const comments = await db.comments.findMany({
      where: {
        productId: "home", // Usamos "home" como identificador para comentários da página inicial
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return comments;
  },
  ["getHomeComments"],
  {
    tags: ["home-comments"],
    revalidate: 60,
  }
);

export const createHomeComment = async (data: {
  name: string;
  message: string;
  image: File | null;
  email: string;
}) => {
  const { v2: cloudinary } = await import("cloudinary");
  const { image, ...rest } = data;
  let imageUrl = "";
  
  if (image) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const fileBuffer = Buffer.from(await image.arrayBuffer());
    const base64Image = fileBuffer.toString("base64");
    const dataUri = `data:${image.type};base64,${base64Image}`;
    const uploadResponse = await cloudinary.uploader.upload(dataUri, {
      folder: "uploads/home-comments",
    });
    imageUrl = uploadResponse.secure_url;
  }
  
  const newComment = await db.comments.create({
    data: {
      ...rest,
      productId: "home", // Identificador para comentários da home
      image: imageUrl,
    }
  });

  revalidateTag("home-comments");
  return newComment;
};

export const getAllComments = unstable_cache(
  async () => {
    const comments = await db.comments.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return comments;
  },
  ["getAllComments"],
  {
    tags: ["admin-comments"],
    revalidate: 30,
  }
);

export const updateCommentResponse = async (commentId: number, response: string) => {
  const updatedComment = await db.comments.update({
    where: {
      id: commentId,
    },
    data: {
      response,
    }
  });

  revalidateTag("home-comments");
  revalidateTag("admin-comments");
  revalidateTag("create-comment");
  return updatedComment;
};

export const deleteComment = async (commentId: number) => {
  const deletedComment = await db.comments.delete({
    where: {
      id: commentId,
    }
  });

  revalidateTag("home-comments");
  revalidateTag("admin-comments");
  revalidateTag("create-comment");
  return deletedComment;
};