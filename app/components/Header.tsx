import Link from "next/link";
import styles from "./components.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>Apptrondev</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/smartcomp">SmartComp</Link>
      </nav>
    </header>
  );
}
