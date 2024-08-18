import React from 'react';
//import { fetchAgregatedDataBreeds } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { fetchSingleBlog } from '@/app/lib/data';

import CreateUpdateWrapper from '@/app/ui/createUpdateWrapper';

export const metadata: Metadata = {
  title: 'Person data agregation',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetchSingleBlog(id);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <CreateUpdateWrapper
        type='update'
        data={data}
      />
    </main>
  );
}
