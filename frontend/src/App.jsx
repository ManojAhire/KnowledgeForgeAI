import {Routes, Route} from "react-router-dom"

import Upload from "./pages/Upload";
import AIChat from "./pages/AIChat";
import Documents from "./pages/Documents";
import KnowledgeGraph from "./pages/KnowledgeGraph";
import Compliance from "./pages/Compliance";
import Settings from "./pages/Settings";


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

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/aichat" element={<AIChat/>} />
          <Route path="/documents" element={<Documents/>} />
          <Route path="/knowledgegraph" element={<KnowledgeGraph/>} />
          <Route path="/compliance" element={<Compliance/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
