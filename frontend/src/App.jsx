import "./App.css"

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app" >
      <Navbar />
      
      <div className="content" >
        <Sidebar />

        <Dashboard />
      </div>
    </div>
  );
}

export default App;