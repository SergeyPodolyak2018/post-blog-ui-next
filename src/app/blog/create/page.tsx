import CreateUpdateWrapper from '@/app/ui/createUpdateWrapper';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  return (
    <main>
      <CreateUpdateWrapper type='create' />
    </main>
  );
}
