import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.hero} aria-label="Hero — Apptrondev">
        <img src="/branding/apptrondev-hero.svg" alt="Apptrondev" className={styles.heroBg} />

        <div className={styles.heroContent}>
          <h1 className={styles.h1}>Apptrondev</h1>
          <p className={styles.lead}>
            Plataforma de aplicativos SaaS para empresas que buscam automação,
            eficiência e controle inteligente.
          </p>

          <div className={styles.heroActions}>
            <a href="#solutions" className={styles.primary} aria-label="Conhecer soluções">
              Conhecer soluções →
            </a>
          </div>
        </div>
      </section>

      <section id="solutions" className={styles.solutions}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Soluções Apptrondev</h2>

          <div className={styles.cards} role="list">
            <article className={styles.card} role="listitem">
              <h3>SmartComp</h3>
              <p>Componentes inteligentes para acelerar o desenvolvimento de aplicações modernas.</p>
            </article>

            <article className={styles.card} role="listitem">
              <h3>SmartFlow</h3>
              <p>Automação de processos, fluxos e integrações entre sistemas.</p>
            </article>

            <article className={styles.card} role="listitem">
              <h3>SmartData</h3>
              <p>Visualização, controle e organização de dados de forma simples e eficiente.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.containerSmall}>
          <h2 className={styles.sectionTitle}>Por que Apptrondev?</h2>
          <ul className={styles.benefits}>
            <li>✔ Arquitetura moderna e escalável</li>
            <li>✔ Foco em automação e produtividade</li>
            <li>✔ Soluções modulares e reutilizáveis</li>
            <li>✔ Pensado para empresas e desenvolvedores</li>
          </ul>
        </div>
      </section>

      <section className={styles.ctaFinal}>
        <div className={styles.containerSmall}>
          <h2>Pronto para explorar a Apptrondev?</h2>
          <a href="/smartcomp" className={styles.primary}>Acessar SmartComp →</a>
        </div>
      </section>

    </div>
  );
}
