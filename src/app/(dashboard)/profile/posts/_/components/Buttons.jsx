"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDeletePost from "../useDeletePost";
import { useRouter } from "next/navigation";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
        transition-colors hover:bg-primary-700">
      <span className="hidden md:block">ایجاد پست</span> <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ post: { _id: id, title } }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, deletePost } = useDeletePost();
  const router = useRouter();

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal title={`حذف ${title}`} open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <ConfirmDelete
          resourceName={title}
          onClose={() => setIsDeleteOpen(false)}
          // onConfirm={deletePost.bind(null, postId)}
          onConfirm={(e) => {
            deletePost(
              { id },
              {
                onSuccess: () => {
                  setIsDeleteOpen(false);
                  router.refresh("/profile/posts");
                },
              }
            );
          }}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
