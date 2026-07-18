import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSummary();
  }, []);

  async function fetchSummary() {
    try {
      const response = await fetch("http://127.0.0.1:8000/summary");
      const data = await response.json();

      setAnalysis(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="dashboard"><h2>Loading...</h2></div>;
  }

  if (!analysis || analysis.message) {
    return (
      <div className="dashboard">
        <h2>Upload a PDF first.</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>AI generated insights from your document.</p>

      <div className="card-container">

        <SummaryCard
          title="Executive Summary"
          items={analysis.summary}
        />

        <SummaryCard
          title="Safety Highlights"
          items={analysis.safety}
        />

        <SummaryCard
          title="Maintenance"
          items={analysis.maintenance}
        />

        <SummaryCard
          title="Risks"
          items={analysis.risks}
        />

      </div>
    </div>
  );
}

export default Dashboard;