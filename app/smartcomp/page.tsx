import SmartComp from "../components/SmartComp";

export default function SmartCompPage() {
  return (
    <div style={{ padding: 120, maxWidth: 960, margin: "0 auto" }}>
      <h1>SmartComp</h1>
      <p style={{ marginTop: 12, color: "var(--text-secondary, #666)" }}>
        Component demo and documentation.
      </p>

      <div style={{ marginTop: 24 }}>
        <SmartComp />
      </div>
    </div>
  );
}
