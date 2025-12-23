export default function DecisionInsights({ data }: { data: string[][] }) {
  const rows = data.slice(1);
  const demand = rows.reduce((s, r) => s + Number(r[5]), 0);
  const inventory = rows.reduce((s, r) => s + Number(r[6]), 0);

  return (
    <div className="card">
      <h3>Agentic AI Recommendations</h3>
      <ul>
        <li>Total Demand Forecast: {demand}</li>
        <li>Total Inventory Position: {inventory}</li>
        <li>⚠️ Replenishment optimization recommended</li>
        <li>📦 Logistics smoothing advised for high-variance SKUs</li>
      </ul>
    </div>
  );
}
