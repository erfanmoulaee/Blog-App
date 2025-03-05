import http from "./httpService";

export async function getPostBySlug(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`);
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries, options) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`, options);
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}

export async function likePostApi(id) {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
}

export async function bookmarkPostAPI(postId) {
  return await http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return await http.post(`/post/create`, data).then(({ data }) => data.data);
}
