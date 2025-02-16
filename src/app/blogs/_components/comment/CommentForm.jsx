"use client";

import { createComment } from "@/lib/Actions";
import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { useState } from "react";

// const initialState = {
//   error: "",
//   message: "",
// };

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  //   const [state, formAction] = useFormState(createComment, initialState);
  //   const ref = useRef(null);
  //   let isLoading = false;

  //   useEffect(() => {
  //     if (state?.message) {
  //       toast.success(state.message);
  //       onClose();
  //     }
  //     if (state?.error) {
  //       toast.error(state.error);
  //     }
  //   }, [state]);

  const createCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form className="space-y-7" action={createCommentWithData}>
            <TextArea name="text" label="متن نظر" value={text} isRequired onChange={(e) => setText(e.target.value)} />

            <Button>تایید</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
