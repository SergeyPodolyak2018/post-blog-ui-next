import { createBlogPost } from '@/app/lib/actions';
import CreateUpdateWrapper from '@/app/ui/createUpdateWrapper';
import Form from '@/app/ui/invoices/create-form';

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
