import Image from 'next/image';
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroLogoContainer}>
          <img 
            src="/branding/logo-apptrondev.svg" 
            alt="ApptronDev" 
            className={styles.logoMain}
            style={{width: '240px', height: 'auto'}}
          />
        </div>

        <h1>Apptrondev</h1>
        <p>Plataforma de aplicativos SaaS para empresas que buscam automação, eficiência e controle inteligente.</p>
        <a href="#apps" className={styles.ctaButton}>Conhecer soluções →</a>
      </section>

      <section id="apps" className={styles.appsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Soluções Apptrondev</h2>
            <p>Aplicativos modulares e inteligentes para empresas modernas.</p>
          </div>

          <div className={styles.appsGrid}>
            <a href="/smartcomp" className={styles.appCard}>
              <div className={styles.appIcon}>📦</div>
              <h3>SmartComp</h3>
              <p>Componentes inteligentes para acelerar o desenvolvimento de aplicações modernas.</p>
              <span className={styles.appLink}>Acessar aplicativo →</span>
            </a>

            <a href="#" className={styles.appCard} aria-disabled="true" tabIndex={-1} title="SmartFlow — Em breve">
              <div className={styles.appIcon}>⚡</div>
              <h3>SmartFlow</h3>
              <p>Automação de processos, fluxos e integrações entre sistemas.</p>
              <span className={styles.appLink}>Em breve</span>
            </a>

            <a href="#" className={styles.appCard} aria-disabled="true" tabIndex={-1} title="SmartData — Em breve">
              <div className={styles.appIcon}>📊</div>
              <h3>SmartData</h3>
              <p>Visualização, controle e organização de dados de forma simples e eficiente.</p>
              <span className={styles.appLink}>Em breve</span>
            </a> 
          </div>
        </div>
      </section>

      <section id="sobre" className={styles.whySection}>
        <div className={styles.container}>
          <h2>Por que Apptrondev?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Arquitetura moderna e escalável</h3>
              <p>Infraestrutura preparada para crescer com seu negócio</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Soluções modulares e reutilizáveis</h3>
              <p>Cada app funciona independente, mas se integra quando necessário</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Foco em automação e produtividade</h3>
              <p>Reduza tempo em tarefas repetitivas e aumente eficiência</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Pensado para empresas e desenvolvedores</h3>
              <p>Interface intuitiva e APIs bem documentadas</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Pronto para explorar a Apptrondev?</h2>
          <a href="/smartcomp" className={styles.ctaLarge}>Acessar SmartComp →</a>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <p>
            Apptrondev é um hub de aplicações SaaS modulares, desenvolvidas para resolver problemas reais de gestão e operação. Cada aplicativo possui identidade própria, mas compartilha uma arquitetura tecnológica escalável e integrada.
          </p>
        </div>
      </section>

      <footer className={styles.homeFooter}>
        <p>© {new Date().getFullYear()} Apptrondev · Ambiente de testes (staging)</p>
      </footer>
    </div>
  );
}