import React from 'react';
//import { fetchAgregatedDataBreeds } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from '@/app/blog/[id]/page.module.css';
import InfoCard from '@/app/ui/infoCard';
import { UNIT_FIELDS } from '@/app/lib/const';
import { fetchSingleBlog } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Blog data',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const data = await fetchSingleBlog(id);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <InfoCard data={data} />
    </div>
  );
}
