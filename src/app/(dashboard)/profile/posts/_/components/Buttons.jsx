"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

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

export function DeletePost({ post: { _id, postTitle } }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // useEffect(() => {
  //   if (state?.message) {
  //     toast.success(state.message);
  //     setIsDeleteOpen(false);
  //   }
  //   if (state?.error) {
  //     toast.error(state.error);
  //   }
  // }, [state]);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal title={`حذف ${postTitle}`} open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <ConfirmDelete
          resourceName={postTitle}
          onClose={() => setIsDeleteOpen(false)}
          // onConfirm={deletePost.bind(null, postId)}
          onConfirm={(e) => {
            e.preventDefautl();
          }}
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
