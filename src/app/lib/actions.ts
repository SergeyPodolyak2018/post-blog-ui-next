'use server';
import { z } from 'zod';
import { createPost, updatePost, deletePost } from './data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { devNull } from 'os';

const FormSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  article: z.string(),
});

export type State = {
  errors?: {
    title?: string[] | undefined;
    description?: string[] | undefined;
    image?: string[] | undefined;
    article?: string[] | undefined;
  };
  message?: string | null;
};

export async function createBlogPost(formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    article: formData.get('article'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const result = await createPost({
    title: validatedFields.data.title,
    description: validatedFields.data.description,
    image: validatedFields.data.image,
    article: validatedFields.data.article,
  });

  revalidatePath('/blog/all');
  redirect('/blog/all');
  return { message: null, errors: {} };
}

export async function updateBlogPost(id: string, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    article: formData.get('article'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const result = await updatePost(id, {
    title: validatedFields.data.title,
    description: validatedFields.data.description,
    image: validatedFields.data.image,
    article: validatedFields.data.article,
  });
  revalidatePath('/blog/all');
  redirect('/blog/all');
  return result;
}

export async function deleteBlogPost(id: string) {
  const result = await deletePost(id);
  revalidatePath('/blog/all');
  redirect('/blog/all');
  return result;
}
