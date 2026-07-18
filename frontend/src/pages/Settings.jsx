function Settings() {

  return (

    <div className="dashboard">


      <h1>
        Settings
      </h1>


      <p>
        Configure your KnowledgeForge AI workspace.
      </p>


      <div className="settings-card">


        <h2>
          Application Information
        </h2>


        <div className="setting-row">

          <span>
            Application
          </span>

          <strong>
            KnowledgeForge AI
          </strong>

        </div>


        <div className="setting-row">

          <span>
            AI Model
          </span>

          <strong>
            Gemini
          </strong>

        </div>


        <div className="setting-row">

          <span>
            Document Processing
          </span>

          <strong>
            Enabled
          </strong>

        </div>


        <div className="setting-row">

          <span>
            Knowledge Graph
          </span>

          <strong>
            Enabled
          </strong>

        </div>


      </div>


    </div>

  );

}


export default Settings;