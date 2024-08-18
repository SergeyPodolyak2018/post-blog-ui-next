import React from 'react';
import { TBlogPatched } from '../lib/definitions';
import Card from './universalCard';
import { UNIT_FIELDS, LINK_TO_UNIT } from '@/app/lib/const';

export default function CardsAgregator(props: { data: TBlogPatched[] }) {
  return (
    <>
      {props.data.map((data) => (
        <Card
          key={data._id}
          data={data}
          fields={UNIT_FIELDS}
          imagePath={data.image}
          linkToUnit={LINK_TO_UNIT['blog'] + `/${data._id}`}
        ></Card>
      ))}
    </>
  );
}
