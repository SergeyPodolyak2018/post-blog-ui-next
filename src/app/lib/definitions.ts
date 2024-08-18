export type TParametr = {
  name: string;
  value: string;
};

export type TBlogPatched = TBlog & { _id: string };

export type TBlog = {
  title: string;
  description: string;
  image: string;
  article: string;
};
