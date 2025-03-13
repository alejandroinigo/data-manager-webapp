# Data Manager Web App

This is a user-friendly web application designed to retrieve and display data from a backend API in a clear and organized table format.

## About The Project

This application makes a REST API call to the backend to fetch transformed data. The data is then presented in a table on the user interface (UI).

**Key Table Features:**

* **Free Text Search:** Easily search for entries by name.
* **Status Filter:** Filter data based on status values.
* **Sortable Columns:** Order rows by ID, name, or creation date (CreatedOn).
* **Pagination:** Browse data with 20 entries per page.

### Built With

* JavaScript
* React
* Next.js

This project was initialized using React with Next.js's Pages Router, executed via `npx create-next-app@latest`.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Install Node.js version v23.9.0 LTS

### Installation

1.  **Clone the Repository (or Unzip):**
    * If you downloaded a zip file, extract it and navigate to the directory in your terminal using `cd <directory_name>`.
    * Alternatively, clone the repository from GitHub:

    ```sh
    git clone https://github.com/alejandroinigo/data-manager-webapp.git
    ```

2.  **Install Dependencies:**
    * Navigate to the project directory in your terminal and run:

    ```sh
    npm install
    ```

3.  **Start the Development Server:**
    * Run the following command to start the local development server:

    ```sh
    npm run dev
    ```

## Usage

Access the application in your browser at:
	[http://localhost:3000](http://localhost:3000)

**Main Screen Overview:**

The main screen is divided into the following sections:

* **Data Filter:** Use this to filter the data by name and status.
* **Results Table:** Displays the data. Click on the column headers (ID, Name, CreatedOn) to sort the table.
* **Pagination Controls:** Navigate through the data with 20 entries per page.

![Main Screen Overview](/images/main.png)