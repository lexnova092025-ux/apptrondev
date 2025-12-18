import styles from "./components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <small>© {new Date().getFullYear()} Apptrondev. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
