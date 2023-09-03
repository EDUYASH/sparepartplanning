


  <h1>Spare Part Planning Application</h1>

  <p>This project comprises both the frontend and backend components of the Spare Part Planning Application. The frontend
    is built using React.js, while the backend is developed using Spring Boot. The application manages spare part
    inventory, job sheets, service centers, and more, utilizing a MySQL database.</p>

  <h2>Table of Contents</h2>

  <ol>
    <li><a href="#getting-started">Getting Started</a></li>
    <ol>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#configuration">Configuration</a></li>
    </ol>
    <li><a href="#usage">Usage</a></li>
    <ol>
      <li><a href="#logging-in">Logging In</a></li>
      <li><a href="#components">Components</a></li>
    </ol>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#TechnologiesUsed">License</a></li>
    
  </ol>

  <h2 id="getting-started">Getting Started</h2>
  <h2 id="TechnologiesUsed">Technology Used</h2>
  <p>- React.js
- Axios
- HTML
- CSS (Tailwind CSS)</p>
  <h3 id="prerequisites">Prerequisites</h3>
  <p>Ensure you have the following tools installed:</p>
  <ul>
    <li>Node.js (for React frontend)</li>
    <li>Java JDK (for Spring Boot backend)</li>
    <li>MySQL (for database)</li>
  </ul>

  <h3 id="installation">Installation</h3>
  <ol>
    <li>Clone the repository:</li>
  </ol>
  <pre><code>git clone https://github.com/your-username/spare-part-planning.git</code></pre>
  <ol start="2">
    <li>Navigate to the frontend directory:</li>
  </ol>
  <pre><code>cd industry</code></pre>
  <ol start="3">
    <li>Install frontend dependencies:</li>
  </ol>
  <pre><code>npm install</code></pre>
  <ol start="4">
    <li>Start the frontend development server:</li>
  </ol>
  <pre><code>npm start</code></pre>
  <ol start="5">
    <li>Open another terminal window and navigate to the backend directory:</li>
  </ol>
  <pre><code>cd spare-part-planning-2</code></pre>
  <ol start="6">
    <li>Build and run the backend using your preferred Java IDE or Maven:</li>
    <ul>
      <li>Update database credentials in <code>src/main/resources/application.properties</code></li>
      <li>Create a MySQL database named <code>spare_part_planning</code></li>
    </ul>
  </ol>

  <h3 id="configuration">Configuration</h3>
  <p>Ensure your database credentials are correctly configured in <code>spare-part-planning-2/application.properties</code>.</p>

  <h2 id="usage">Usage</h2>

  <h3 id="logging-in">Logging In</h3>
  <p>After starting the frontend at <code>localhost:3000</code>, you'll see a login page. Use the following credentials:</p>
  <ul>
    <li>Username: Dheeraj</li>
    <li>Password: Yash</li>
  </ul>

  <h3 id="components">Components</h3>
  <p>The homepage consists of the following components:</p>
  <ol>
    <li><strong>CreateJobSheets:</strong> Create jobs with customer details, device model, description, service center, and date.</li>
    <li><strong>ViewjobSheets:</strong> Display jobs, diagnose and update inventory, or place orders.</li>
    <li><strong>Dispatch Plans:</strong> Manage orders and mark as dispatched.</li>
  </ol>

  <h2 id="api-documentation">API Documentation</h2>
  <p>You can find the detailed API documentation in the <code>sparepartplanning/readme.md</code> file.</p>

  <h2 id="contributing">Contributing</h2>
  <p>Contributions are welcome! Fork the repository, make your changes, and submit a pull request.</p>

 Author
 - Yash Rathi
 - https://github.com/EDUYASH
 - Dheeraj Karnani
 - https://github.com/DheerajKarnani660 





