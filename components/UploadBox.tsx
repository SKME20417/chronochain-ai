"use client";
import { useState } from "react";
import DataPreview from "./DataPreview";
import DecisionInsights from "./DecisionInsights";

export default function UploadBox() {
  const [data, setData] = useState<string[][]>([]);
  const [msg, setMsg] = useState("");

  const parseCSV = (t: string) =>
    t.trim().split("\n").map(r => r.split(","));

  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    const reader = new FileReader();
    reader.onload = () => {
      const rows = parseCSV(reader.result as string);
      setData(rows);
      setMsg(`Uploaded data loaded successfully (${rows.length - 1} records)`);
    };
    reader.readAsText(f);
  };

  const clearData = () => {
    setData([]);
    setMsg("");
  };

  return (
    <>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <input type="file" accept=".csv" onChange={upload} />
        {data.length > 0 && (
          <button className="secondary" onClick={clearData}>
            Clear Uploaded Data
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
