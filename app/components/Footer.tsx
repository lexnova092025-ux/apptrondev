import styles from "./components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} Apptrondev</small>
    </footer>
  );
}
