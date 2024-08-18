import styles from '@/app/blog/all/page.module.css';
import { fetchBlog } from '@/app/lib/data';
import CardsAgregator from '@/app/ui/cardsAgregator';
import { CreatePost } from '@/app/ui/buttons';

export default async function Page() {
  const result = await fetchBlog();

  return (
    <div className={styles.container}>
      <CreatePost />
      <div className={styles.content}>
        <CardsAgregator data={result} />
      </div>
    </div>
  );
}
