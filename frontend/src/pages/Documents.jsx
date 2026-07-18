import { useEffect, useState } from "react";

import { getSummary } from "../services/api";


function Documents() {

  const [data, setData] = useState(null);


  useEffect(() => {

    async function loadDocument() {

      const result = await getSummary();

      setData(result);

    }


    loadDocument();

  }, []);


  if (!data) {

    return (

      <div className="dashboard">

        <h2>
          Loading Documents...
        </h2>

      </div>

    );

  }


  return (

    <div className="dashboard">


      <h1>
        Documents
      </h1>


      <p>
        Analyze and explore your uploaded documents.
      </p>


      <div className="document-card">


        <div className="document-header">

          <div>

            <h2>
              Uploaded Document
            </h2>

            <p>
              AI analyzed document
            </p>

          </div>


          <span className="document-status">
            Analyzed
          </span>

        </div>


        <div className="document-stats">


          <div>

            <strong>
              {data.safety.length}
            </strong>

            <span>
              Safety Requirements
            </span>

          </div>


          <div>

            <strong>
              {data.risks.length}
            </strong>

            <span>
              Risks
            </span>

          </div>


          <div>

            <strong>
              {data.maintenance.length}
            </strong>

            <span>
              Maintenance Tasks
            </span>

          </div>


          <div>

            <strong>
              {data.graph.nodes.length}
            </strong>

            <span>
              Graph Nodes
            </span>

          </div>


        </div>


        <div className="document-summary">

          <h3>
            Summary
          </h3>

          <p>
            {data.summary}
          </p>

        </div>


      </div>


    </div>

  );

}


export default Documents;