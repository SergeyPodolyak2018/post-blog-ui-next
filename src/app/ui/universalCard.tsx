'use client';
import React, { useEffect } from 'react';
import { TBlogPatched } from '../lib/definitions';
import { useRouter } from 'next/navigation';
import { DeletePost, UpdatePost } from './buttons';

export default function Card<T extends TBlogPatched>(props: {
  data: T;
  fields: string[];
  imagePath: string;
  style?: React.CSSProperties;
  linkToUnit: string;
}) {
  const [src, setSrc] = React.useState('/loading.gif');
  const router = useRouter();

  return (
    <div
      className='max-w-sm rounded shadow-lg bg-white'
      style={{
        margin: '10px',
        color: 'black',
        height: 'fit-content',
        cursor: 'pointer',
      }}
    >
      <img
        className='w-full'
        src={props.data.image}
        alt=''
        onClick={() => router.push(props.linkToUnit)}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{props.data.title}</div>
        <p className='text-gray-700 text-base'>{props.data.description}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <div className='flex justify-end gap-2'>
          <UpdatePost id={props.data._id} />
          <DeletePost id={props.data._id} />
        </div>
      </div>
    </div>
  );
}
