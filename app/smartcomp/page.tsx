import styles from './styles.module.css';
import SmartCompShowcase from '../../app/components/SmartCompShowcase';
import PropsTable from '../../app/components/PropsTable';
import DemoPlayground from '../../app/components/DemoPlayground';

export default function SmartCompPage() {
  return (
    <div>
      <section className={styles.hero}>
        <div>
          <h1>SmartComp</h1>
          <p style={{ marginTop: 12 }}>
            Componentes inteligentes para acelerar o desenvolvimento de aplicações
            modernas. Explore demos, props e exemplos de uso.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, marginBottom: 16 }}>Demonstração</h2>
          <div className="grid" style={{ gap: 20 }}>
            <SmartCompShowcase title="Customer Card" subtitle="Customer" />
            <SmartCompShowcase title="Order Card" subtitle="Orders" />
          </div>
        </div>
      </section>

      <section style={{ padding: '24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>Playground</h2>
          <DemoPlayground />
        </div>
      </section>

      <section style={{ padding: '24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>Props</h2>
          <PropsTable />
        </div>
      </section>

      <section style={{ padding: '48px', textAlign: 'center' }}>
        <a href="/" style={{ display: 'inline-flex', padding: '10px 18px', borderRadius: 999, background: 'var(--text-primary)', color: 'var(--background)' }}>
          Voltar à Home
        </a>
      </section>
    </div>
  );
}
