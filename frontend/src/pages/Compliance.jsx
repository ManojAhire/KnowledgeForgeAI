import { useEffect, useState } from "react";


function Compliance() {

  const [data, setData] = useState(null);


  useEffect(() => {

    async function fetchCompliance() {

      const response = await fetch(
        "http://127.0.0.1:8000/summary"
      );

      const result = await response.json();

      setData(result);

    }

    fetchCompliance();

  }, []);


  if (!data) {

    return (
      <div className="dashboard">
        <h2>Loading Compliance Analysis...</h2>
      </div>
    );

  }


  return (

    <div className="dashboard">

      <h1>Compliance Checker</h1>

      <p>
        AI-powered safety and compliance analysis.
      </p>


      <div className="compliance-grid">


        <div className="compliance-card">

          <h2>Safety Requirements</h2>

          <p className="count">
            {data.safety.length} requirements found
          </p>


          {data.safety.map((item, index) => (

            <div
              className="compliance-item"
              key={index}
            >

              <span className="check">
                ✓
              </span>

              <span>
                {item}
              </span>

            </div>

          ))}

        </div>


        <div className="compliance-card risk-card">

          <h2>Identified Risks</h2>

          <p className="count">
            {data.risks.length} risks found
          </p>


          {data.risks.map((item, index) => (

            <div
              className="compliance-item"
              key={index}
            >

              <span className="warning">
                !
              </span>

              <span>
                {item}
              </span>

            </div>

          ))}

        </div>


      </div>

    </div>

  );

}


export default Compliance;