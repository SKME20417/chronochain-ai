"use client";
import { useState } from "react";
import DataPreview from "./DataPreview";
import DecisionInsights from "./DecisionInsights";

export default function SampleDataLoader() {
  const [data, setData] = useState<string[][]>([]);
  const [msg, setMsg] = useState("");

  const parseCSV = (t: string) =>
    t.trim().split("\n").map(r => r.split(","));

  const loadSample = async () => {
    // Clear any previously uploaded data implicitly
    const res = await fetch("/chronochain_sample_data_us.csv");
    const text = await res.text();
    const rows = parseCSV(text);
    setData(rows);
    setMsg(`Sample data loaded successfully (${rows.length - 1} records)`);
  };

  const clearData = () => {
    setData([]);
    setMsg("");
  };

  return (
    <>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button onClick={loadSample}>Load Sample Data</button>
        {data.length > 0 && (
          <button className="secondary" onClick={clearData}>
            Clear Sample Data
          </button>
        )}
      </div>

      {msg && <div className="popup">{msg}</div>}

      {data.length > 0 && (
        <>
          <DataPreview data={data.slice(0, 11)} />
          <DecisionInsights data={data} />
        </>
      )}
    </>
  );
}
