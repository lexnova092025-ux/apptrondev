export default function PropsTable() {
  const rows = [
    { name: 'title', type: 'string', desc: 'Título do componente', def: "'SmartCard'" },
    { name: 'subtitle', type: 'string', desc: 'Subtítulo ou categoria', def: "'Example'" },
    { name: 'onAction', type: '() => void', desc: 'Callback para ação primária', def: 'undefined' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Prop</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Tipo</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Descrição</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Default</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td style={{ padding: 8, borderTop: '1px solid var(--button-secondary-border)' }}>{r.name}</td>
            <td style={{ padding: 8, borderTop: '1px solid var(--button-secondary-border)' }}>{r.type}</td>
            <td style={{ padding: 8, borderTop: '1px solid var(--button-secondary-border)' }}>{r.desc}</td>
            <td style={{ padding: 8, borderTop: '1px solid var(--button-secondary-border)' }}>{r.def}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
