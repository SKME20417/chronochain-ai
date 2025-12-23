import ForecastChart from "../../components/ForecastChart";
import FrequencySelector from "../../components/FrequencySelector";
import ModelSelector from "../../components/ModelSelector";

export default function Forecasting() {
  return (
    <div className="card">
      <h2>Forecasting Engine</h2>
      <FrequencySelector />
      <ModelSelector />
      <ForecastChart />
    </div>
  );
}
