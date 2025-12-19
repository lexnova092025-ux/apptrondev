import styles from './app.module.css';

type Benefit = { icon: React.ReactNode; title: string; body: string };

export default function BenefitsSection({ items }: { items: Benefit[] }) {
  return (
    <section className={styles.whySection}>
      <div className={styles.featuresGrid}>
        {items.map((it, i) => (
          <div className={styles.feature} key={i}>
            <div className={styles.featureIcon}>{it.icon}</div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
