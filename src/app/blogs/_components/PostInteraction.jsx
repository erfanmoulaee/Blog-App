"use client";
import { bookmarkPostAPI, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmarkIcon, HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function PostInteraction({ post }) {
  const router = useRouter();
  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const bookmarkHandle = async (postId) => {
    try {
      const { message } = await bookmarkPostAPI(postId);
      router.refresh();
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-8">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandle(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
