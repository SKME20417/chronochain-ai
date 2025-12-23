export default function ModelSelector() {
  return (
    <div className="card">
      <h3>Forecasting Model</h3>
      <select>
        <option>ARIMA</option>
        <option>Prophet</option>
        <option>LSTM</option>
        <option>Transformer</option>
      </select>
    </div>
  );
}
