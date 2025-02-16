"use server";

import { createCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(postId, parentId, formData) {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const rawFormData = {
    text: formData.get("text"),
    postId,
    parentId,
  };
  try {
    const {
      data: { message },
    } = await createCommentApi(rawFormData, options);
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
  }
  revalidatePath("/blogs/[slug]");
}
