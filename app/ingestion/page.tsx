import SampleDataLoader from "../../components/SampleDataLoader";
import UploadBox from "../../components/UploadBox";

export default function Ingestion() {
  return (
    <div className="card">
      <h2>Data Ingestion & Integration</h2>
      <p>
        Load sample US-based supply chain data for quick evaluation, or upload
        your own enterprise dataset using the standardized CSV template.
      </p>

      {/* 1️⃣ Load Sample Data */}
      <h3 style={{ marginTop: 24 }}>Load Sample Data</h3>
      <SampleDataLoader />

      {/* 2️⃣ Upload CSV */}
      <h3 style={{ marginTop: 32 }}>Upload Your Data</h3>
      <UploadBox />

      {/* 3️⃣ Download CSV Template */}
      <h3 style={{ marginTop: 32 }}>Download CSV Template</h3>
      <a href="/chronochain_filled_template_us.csv" download>
        <button className="secondary">Download CSV Template</button>
      </a>
    </div>
  );
}
