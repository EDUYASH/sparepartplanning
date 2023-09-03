Spare Part Planning Application
This project comprises both the frontend and backend components of the Spare Part Planning Application. The frontend is built using React.js, while the backend is developed using Spring Boot. The application manages spare part inventory, job sheets, service centers, and more, utilizing a MySQL database.

Table of Contents
Getting Started
Prerequisites
Installation
Configuration
Usage
Logging In
Components
API Documentation
Contributing
License
Acknowledgements
Getting Started
Prerequisites
Ensure you have the following tools installed:

Node.js (for React frontend)
Java JDK (for Spring Boot backend)
MySQL (for database)
Installation
Clone the repository:

shell
Copy code
git clone https://github.com/EDUYASH/spare-part-planning.git
Navigate to the frontend directory:

shell
Copy code
cd industry
Install frontend dependencies:

shell
Copy code
npm install
Start the frontend development server:

shell
Copy code
npm start
Open another terminal window and navigate to the backend directory:

shell
Copy code
cd spare-part-planning-2
Build and run the backend using your preferred Java IDE or Maven:

Update database credentials in src/main/resources/application.properties
Create a MySQL database named spare_part_planning
Configuration
Ensure your database credentials are correctly configured in spare-part-planning-2/application.properties.

Usage
Logging In
Open a web browser and navigate to http://localhost:3000
Use the following credentials to log in:
Username: Dheeraj
Password: Yash
Components
The application's homepage features the following components:

Create Job Sheets:

Create new jobs with customer information, device model, description, service center, and date.
Jobs are created to address service issues and place orders for required parts.
View Job Sheets:

Display all placed jobs.
Check the availability of required parts in the service center by clicking the "Diagnose" button.
Update inventory quantities based on part usage or place an order if needed.
Dispatch Plans:

Display orders sent to the planning team (warehouse).
Remove fulfilled orders by clicking the "Dispatch Successful" button.
API Documentation
For detailed API documentation and available endpoints, refer to the API Documentation located in the backend directory.

Contributing
Contributions are welcome! If you find a bug or have an improvement suggestion, please create an issue or submit a pull request.

Author
 - Yash Rathi
 - https://github.com/EDUYASH/sparepartplanning
 - Dheeraj Karnani
 - https://github.com/DheerajKarnani660

Acknowledgements
React Documentation
Spring Boot Documentation
MySQL Documentation
Axios Documentation
