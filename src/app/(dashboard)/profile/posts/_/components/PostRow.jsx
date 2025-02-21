import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormater";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import React from "react";
import { DeletePost, UpdatePost } from "./Buttons";

const typeStyle = {
  free: {
    lable: "رایگان",
    className: "badge--success",
  },
  premium: {
    lable: "پولی",
    className: "badge--secondary",
  },
};

function PostRow({ index, post }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>{typeStyle[type].lable}</span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdatePost id={post._id} />
          <DeletePost id={post._id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default PostRow;
