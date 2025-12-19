import Link from 'next/link';
import AppHero from '../../components/AppHero';
import homeStyles from '../../home.module.css';

export const metadata = {
  title: 'SmartComp — ApptronDev',
  description: 'SmartComp — comparação inteligente de produtos e preços para decisões mais rápidas.',
  keywords: ['SmartComp', 'comparação de preços', 'comparador de produtos', 'ApptronDev'],
  authors: [{ name: 'ApptronDev', url: 'https://apptrondev.onrender.com' }],
  applicationName: 'ApptronDev',
  openGraph: {
    title: 'SmartComp — ApptronDev',
    description: 'SmartComp — comparação inteligente de produtos e preços para decisões mais rápidas.',
    url: 'https://apptrondev.onrender.com/apps/smartcomp',
    siteName: 'ApptronDev',
    images: [
      {
        url: 'https://apptrondev.onrender.com/branding/logo-apptrondev.svg',
        width: 120,
        height: 120,
        alt: 'ApptronDev logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartComp — ApptronDev',
    description: 'SmartComp — comparação inteligente de produtos e preços para decisões mais rápidas.',
    images: ['https://apptrondev.onrender.com/branding/logo-apptrondev.svg'],
  },
  alternates: {
    canonical: 'https://apptrondev.onrender.com/apps/smartcomp',
  },
};

export default function SmartCompPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SmartComp",
    description: "SmartComp — comparação inteligente de produtos e preços para decisões mais rápidas.",
    url: "https://apptrondev.onrender.com/apps/smartcomp",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: { '@type': 'Organization', name: 'ApptronDev', url: 'https://apptrondev.onrender.com' },
    image: 'https://apptrondev.onrender.com/branding/logo-apptrondev.svg',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <AppHero
        title="SmartComp"
        subtitle="Comparação inteligente de produtos e preços para decisões mais rápidas e seguras."
        ctaLabel="Solicitar acesso"
        ctaHref="/contato"
        imageSrc="/branding/logo-apptrondev.svg"
      />

      {/* Problema → Solução */}
      <section className={homeStyles.whySection} aria-labelledby="why-1">
        <div className={`${homeStyles.container} ${homeStyles.sectionHeader}`}>
          <h2 id="why-1">Comparar manualmente custa tempo e dinheiro</h2>
          <p>
            Planilhas, múltiplos sites e dados desatualizados tornam a tomada de decisão lenta e imprecisa.
          </p>
        </div>

        <div className={homeStyles.featuresGrid}>
          <div className={homeStyles.feature}>
            <div className={homeStyles.featureIcon}>⚡</div>
            <h3>Centralização de dados</h3>
            <p>Reúna preços, características e variações em um único lugar.</p>
          </div>

          <div className={homeStyles.feature}>
            <div className={homeStyles.featureIcon}>📊</div>
            <h3>Análise inteligente</h3>
            <p>Compare automaticamente os dados mais relevantes para sua decisão.</p>
          </div>

          <div className={homeStyles.feature}>
            <div className={homeStyles.featureIcon}>🎯</div>
            <h3>Decisão mais rápida</h3>
            <p>Menos tempo analisando, mais confiança na escolha.</p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className={homeStyles.appsSection} aria-labelledby="how-1">
        <div className={`${homeStyles.container} ${homeStyles.sectionHeader}`}>
          <h2 id="how-1">Como o SmartComp funciona</h2>
          <p>Um fluxo simples, direto e eficiente</p>
        </div>

        <div className={homeStyles.featuresGrid}>
          <div className={homeStyles.feature}>
            <h3>1. Coleta</h3>
            <p>O SmartComp coleta dados de produtos, preços e atributos relevantes.</p>
          </div>

          <div className={homeStyles.feature}>
            <h3>2. Comparação</h3>
            <p>Algoritmos organizam e comparam as informações automaticamente.</p>
          </div>

          <div className={homeStyles.feature}>
            <h3>3. Resultado</h3>
            <p>Você visualiza comparações claras para tomar a melhor decisão.</p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className={homeStyles.whySection} aria-labelledby="audience-1">
        <div className={`${homeStyles.container} ${homeStyles.sectionHeader}`}>
          <h2 id="audience-1">Para quem o SmartComp é ideal</h2>
        </div>

        <div className={homeStyles.featuresGrid}>
          <div className={homeStyles.feature}>
            <h3>Empresas</h3>
            <p>Comparação de fornecedores, custos e benefícios de forma estruturada.</p>
          </div>

          <div className={homeStyles.feature}>
            <h3>Times de compras</h3>
            <p>Decisões mais rápidas e baseadas em dados reais.</p>
          </div>

          <div className={homeStyles.feature}>
            <h3>Usuários avançados</h3>
            <p>Comparações detalhadas sem esforço manual.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className={homeStyles.ctaSection}>
        <div className={homeStyles.container}>
          <h2>Pronto para comparar de forma inteligente?</h2>
          <p>Solicite acesso ao SmartComp e transforme sua forma de decidir.</p>

          <Link href="/contato" className={homeStyles.ctaLarge}>
            Falar com a ApptronDev
          </Link>
        </div>
      </section>
    </main>
  );
}
