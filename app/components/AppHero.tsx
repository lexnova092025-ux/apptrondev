import Link from 'next/link';
import styles from './app.module.css';

type Props = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
};

export default function AppHero({ title, subtitle, ctaLabel, ctaHref = '/', imageSrc }: Props) {
  return (
    <section className={styles.appHero}>
      {imageSrc && (
        <img src={imageSrc} alt={`${title} icon`} className={styles.appHeroIcon} width={96} height={96} />
      )}

      <h1>{title}</h1>
      {subtitle && <p className={styles.appHeroSubtitle}>{subtitle}</p>}

      {ctaLabel && (
        <Link href={ctaHref} className={styles.ctaLarge}>
          {ctaLabel}
        </Link>
      )}
    </section>
  );
}
