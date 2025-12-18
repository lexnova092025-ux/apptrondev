"use client";
import { useState } from 'react';
import SmartCompShowcase from './SmartCompShowcase';

export default function DemoPlayground() {
  const [title, setTitle] = useState('SmartCard');
  const [subtitle, setSubtitle] = useState('Example');

  return (
    <div style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr 320px' }}>
      <div>
        <SmartCompShowcase title={title} subtitle={subtitle} />
      </div>

      <div style={{ border: '1px solid var(--button-secondary-border)', padding: 12, borderRadius: 8 }}>
        <h4 style={{ marginBottom: 8 }}>Playground</h4>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Título
          <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', marginTop: 6, padding: 8 }} />
        </label>
        <label style={{ display: 'block' }}>
          Subtítulo
          <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} style={{ width: '100%', marginTop: 6, padding: 8 }} />
        </label>
      </div>
    </div>
  );
}
