'use client';
import React from 'react';
import { Metadata } from 'next';
import Form from '@/app/ui/invoices/create-form';
import { createBlogPost, updateBlogPost } from '@/app/lib/actions';
import { TBlogPatched } from '../lib/definitions';

export const metadata: Metadata = {
  title: 'Person data agregation',
};

export default function CreateUpdateWrapper(props: {
  type: 'create' | 'update';
  data?: TBlogPatched;
}) {
  const action = (id: string) => (val: FormData) => updateBlogPost(id, val);

  return (
    <main>
      <Form
        action={
          props.type === 'update' ? action(props.data?._id!) : createBlogPost
        }
        data={props.data}
        actionName={props.type === 'update' ? 'Update Post' : 'Create Post'}
      />
    </main>
  );
}
