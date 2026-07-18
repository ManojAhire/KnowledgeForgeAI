import { useEffect, useState } from "react";

import { getSummary } from "../services/api";


function Dashboard() {


  const [data, setData] = useState(null);


  useEffect(() => {


    async function loadData() {

      try {

        const result = await getSummary();

        setData(result);

      } catch (error) {

        console.error(error);

      }

    }


    loadData();


  }, []);


  if (!data) {

    return (

      <div className="dashboard">

        <h2>
          Loading Dashboard...
        </h2>

      </div>

    );

  }


  return (

    <div className="dashboard">


      <h1>
        Knowledge Dashboard
      </h1>


      <p>
        AI-powered document intelligence overview.
      </p>


      <div className="card-container">


        <div className="card">

          <h2>
            Safety Requirements
          </h2>


          <p>
            {data.safety.length}
          </p>

        </div>


        <div className="card">

          <h2>
            Maintenance Tasks
          </h2>


          <p>
            {data.maintenance.length}
          </p>

        </div>


        <div className="card">

          <h2>
            Identified Risks
          </h2>


          <p>
            {data.risks.length}
          </p>

        </div>


        <div className="card">

          <h2>
            Knowledge Nodes
          </h2>


          <p>
            {data.graph.nodes.length}
          </p>

        </div>


      </div>


      <div className="summary-section">


        <h2>
          Document Summary
        </h2>


        <p>
          {data.summary}
        </p>


      </div>


    </div>

  );

}


export default Dashboard;