export default function KPI({ title, value }: { title: string; value: string }) {
    return (
        <div className="card">
            <strong>{title}</strong>
            <h2>{value}</h2>
        </div>
    );
}
