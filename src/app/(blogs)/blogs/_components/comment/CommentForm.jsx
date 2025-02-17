"use client";

import { createComment } from "@/lib/Actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);
  const ref = useRef(null);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  // const createCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            ref={ref}
            className="space-y-7"
            //  action={createCommentWithData}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
              ref?.current?.reset();
            }}>
            <TextArea name="text" label="متن نظر" value={text} isRequired onChange={(e) => setText(e.target.value)} />

            <SubmitButton>تائید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
