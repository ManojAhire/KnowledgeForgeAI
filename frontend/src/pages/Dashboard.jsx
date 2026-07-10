import Card from "../components/Card";
import cards from "../data/dashboardcard";

function Dashboard() {
  return (
    <main className="dashboard" >
      <h1>Welcome to KnowledgeForge AI</h1>

      <p>
        Your Industrial Knowledge Intelligence Platform
      </p>

      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>


    </main>
  );
}

export default Dashboard;