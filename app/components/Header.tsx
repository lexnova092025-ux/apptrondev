import Link from "next/link";
import styles from "./components.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="/" aria-label="Go to home">
          <img src="/branding/logo.svg" alt="Apptrondev" className={styles.logoSmall} />
        </a>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/smartcomp">SmartComp</Link>
      </nav>
    </header>
  );
}
