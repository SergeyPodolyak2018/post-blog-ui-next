import styles from '@/app/blog/layout.module.css';
import NavLinks from '@/app/ui/nav-links';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavLinks />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
