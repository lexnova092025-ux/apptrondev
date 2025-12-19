import AppHero from '../../components/AppHero';
import BenefitsSection from '../../components/BenefitsSection';

export const metadata = {
  title: 'SmartComp — ApptronDev',
  description: 'Compare produtos, preços e características de forma inteligente e automática.'
};

export default function SmartCompPage() {
  return (
    <main>
      <AppHero
        title="SmartComp"
        subtitle="Compare produtos, preços e características de forma inteligente e automática."
        ctaLabel="Solicitar acesso"
        ctaHref="#contact"
        imageSrc="/assets/smartcomp-icon.png"
      />

      <BenefitsSection
        items={[
          { icon: '📊', title: 'Comparação inteligente', body: 'Analise dados reais em segundos.' },
          { icon: '⚙️', title: 'Automação', body: 'Menos trabalho manual, mais precisão.' },
          { icon: '🔒', title: 'Privacidade', body: 'Dados tratados com segurança e controle.' },
        ]}
      />

      <section style={{ padding: 24, textAlign: 'center' }}>
        <a href="#contact" className="ctaLarge">Quero testar</a>
      </section>
    </main>
  );
}
