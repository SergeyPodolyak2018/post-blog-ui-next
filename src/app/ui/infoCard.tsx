'use client';
import React from 'react';
import { TBlogPatched } from '../lib/definitions';
import parse from 'html-react-parser';

export default function InfoCard<T extends TBlogPatched>(props: {
  data: T;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className='max-w-bg rounded shadow-lg bg-white'
      style={{ margin: '10px', color: 'black', height: 'fit-content' }}
    >
      <img
        className='w-full'
        src={props.data.image}
        alt=''
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{props.data.title}</div>
        <div className='text-gray-700 text-base'>
          {parse(props.data.article)}
        </div>
      </div>
    </div>
  );
}
