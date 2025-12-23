import KPI from "../../components/KPI";
import ImpactMetrics from "../../components/ImpactMetrics";

export default function Dashboard() {
    return (
        <>
            <KPI title="Forecast Accuracy" value="92%" />
            <KPI title="Inventory Optimization" value="$1.4M" />
            <ImpactMetrics />
        </>
    );
}
