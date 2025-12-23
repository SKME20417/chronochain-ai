export default function DataPreview({ data }: { data: string[][] }) {
  return (
    <>
      <h4>Data Preview (Top 10 Records)</h4>
      <table>
        <thead>
          <tr>{data[0].map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {data.slice(1).map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
