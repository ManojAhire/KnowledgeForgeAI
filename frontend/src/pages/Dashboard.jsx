import Card from "../components/Card";

function Dashboard() {
  return (
    <main className="dashboard" >
      <h1>Welcome to KnowledgeForge AI</h1>

      <p>
        Your Industrial Knowledge Intelligence Platform
      </p>

      <div className="card-container">
        <Card 
          title="📄 Upload PDF"
          description="Upload industrial documents"
        />
        <Card 
          title="🤖 AI Chat"
          description="Talk with your documents"
        />
        <Card 
          title="📚 Documents"
          description="View uploaded documents"
        />
        <Card 
          title="✅ Compliance"
          description="Check compliance reports"
        />
      </div>


    </main>
  );
}

export default Dashboard;