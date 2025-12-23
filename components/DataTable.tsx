export default function DataTable({ rows }: { rows: string[][] }) {
    return (
        <table>
            <thead>
                <tr>{rows[0].map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
                {rows.slice(1).map((r, i) => (
                    <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
                ))}
            </tbody>
        </table>
    );
}
