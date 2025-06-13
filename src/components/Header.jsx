import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="https://picsum.photos/80" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </div>
    </header>
  );
}


