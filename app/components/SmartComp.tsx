import styles from "./components.module.css";

export default function SmartComp() {
  return (
    <div className={styles.smartcard} style={{ maxWidth: 720 }}>
      <h2>SmartComp demo</h2>
      <p style={{ marginTop: 8, color: "var(--text-secondary, #666)" }}>
        This is a simple demo card for SmartComp. We will add interactive examples
        and props docs here.
      </p>
    </div>
  );
}
