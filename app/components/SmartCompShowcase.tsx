"use client";
import styles from "./smartcomp.module.css";

export default function SmartCompShowcase({ title = "SmartCard", subtitle = "Example" }: { title?: string; subtitle?: string }) {
  return (
    <div className={styles.showcaseCard}>
      <div className={styles.showcaseHeader}>
        <div className={styles.showcaseTitle}>{title}</div>
        <div className={styles.showcaseSub}>{subtitle}</div>
      </div>

      <div className={styles.showcaseBody}>
        <p>
          Componente exemplo que demonstra como `SmartComp` pode ser usado para
          exibir informações com ações rápidas.
        </p>

        <div className={styles.showcaseActions}>
          <button className={styles.primary}>Ação principal</button>
          <button className={styles.ghost}>Secundária</button>
        </div>
      </div>
    </div>
  );
}
