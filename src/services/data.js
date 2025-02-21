import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getPosts } from "./postServices";
import { getAllCommentsApi } from "./commentService";

export async function fetchCardData() {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);

  try {
    const data = await Promise.all([getAllUsersApi(options), getPosts(), getAllCommentsApi(options)]);
    console.log(data);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    return {
      numberOfUsers,
      numberOfPosts,
      numberOfComments,
    };
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
