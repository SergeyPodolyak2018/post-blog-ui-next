'use client';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Link from 'next/link';

import { Button } from '@/app/ui/button';

import { TBlogPatched } from '@/app/lib/definitions';
import { detectContentType } from 'next/dist/server/image-optimizer';

export default function Form(props: {
  action: (val: FormData) => void;
  data?: TBlogPatched;
  actionName: string;
}) {
  const editor = useRef(null);
  const [content, setContent] = useState(props.data?.article || '');
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: 'Start typings...',
  };
  const sendForm = (data: FormData) => {
    data.set('article', content);
    props.action(data);
  };

  return (
    <form action={sendForm}>
      <div
        className='rounded-md bg-gray-50 p-4 md:p-6'
        style={{ color: 'black' }}
      >
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='mb-2 block text-sm font-medium'
          >
            Enter Title
          </label>
          <div className='relative'>
            <input
              id='title'
              name='title'
              type='text'
              defaultValue={props?.data?.title || ''}
              placeholder='Enter Title'
              className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            />
          </div>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='description'
            className='mb-2 block text-sm font-medium'
          >
            Enter Description
          </label>
          <div className='relative'>
            <input
              id='description'
              name='description'
              type='text'
              defaultValue={props?.data?.description || ''}
              placeholder='Enter Description'
              className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='image'
            className='mb-2 block text-sm font-medium'
          >
            Enter Image
          </label>
          <div className='relative'>
            <input
              id='image'
              name='image'
              type='text'
              placeholder='Enter Image'
              defaultValue={props?.data?.image || ''}
              className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='article'
            className='mb-2 block text-sm font-medium'
          >
            Enter Article
          </label>
          <div className='relative'>
            {
              /* <textarea
              id='article'
              name='article'
              rows={10}
              cols={50}
              defaultValue={props?.data?.article || ''}
              placeholder='Enter Article'
              className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            /> */
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            }
          </div>
        </div>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/blog/all'
          className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>{props.actionName}</Button>
      </div>
    </form>
  );
}
