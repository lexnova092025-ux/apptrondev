import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Apptrondev</h1>
          <p>Home base for Apptrondev — dev tools, components, and demos.</p>
          <div className={styles.ctas}>
            <Link className={styles.primary} href="/smartcomp">
              SmartComp →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
