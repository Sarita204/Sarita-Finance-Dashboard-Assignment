# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Finance Dashboard UI

A simple and interactive **Finance Dashboard** built using **React**.
This project helps users track financial activity, view insights, and manage transactions with a clean UI.


## Features

### Dashboard Overview

* Summary cards:

  * Total Balance
  * Income
  * Expenses
* Balance trend chart (time-based)
* Category-wise expense chart

### Transactions

* View all transactions in a table
* Filter by type (Income / Expense)
* Search by category
* Add new transactions (Admin only)
* Export transactions to Excel

### Role-Based UI

* **Viewer** → Can only view data
* **Admin** → Can add transactions
* Role switch using dropdown

### Insights

* Highest spending category
* Monthly expense comparison
* Smart observation (saving vs overspending)

### UI Enhancements

* Dark / Light mode toggle
* Responsive design (mobile + desktop)
* Empty state handling

## Tech Stack

* **React (CRA)**
* **Recharts** – charts
* **React Icons**
* **React Bootstrap** – modal
* **XLSX** – export to Excel
* **CSS (custom styling)**

## Project Structure

src/
│── components/
│   ├── SideNav.jsx
│   ├── SummaryCard.jsx
│   ├── BalanceChart.jsx
│   ├── CategoryChart.jsx
│   ├── TransactionTable.jsx
│   ├── Main.jsx
│
│── data/
│   └── mockData.js
│
│── styles/
│   ├── Main.css
│   ├── SideNav.css
│   ├── TransactionTable.css
│
│── App.js
│── index.js


## Setup Instructions

1. Clone the repository

git clone https://github.com/Sarita204/Sarita-Finance-Dashboard-Assignment.git

2. Install dependencies -- npm install

3. Run the app  --  npm start

## Data Persistence

* Transactions are stored in **localStorage**
* Data remains even after page refresh

## Optional Enhancements Implemented

* Dark Mode 
* Excel Export 
* Responsive UI
* Modal-based form 

## Future Improvements

* Edit / Delete transactions
* API integration
* Advanced filters (date range, category)
* Charts with more analytics

## Author

**Sarita P**
Frontend Developer

## Preview

<img width="956" height="405" alt="image" src="https://github.com/user-attachments/assets/f92553b5-eba9-4423-b611-fbfc0131dc87" />
<img width="947" height="415" alt="image" src="https://github.com/user-attachments/assets/5b5666fe-ee27-419a-8d11-ab7261f98b00" />

## Notes

* This project uses **mock data** (no backend)
* Focus is on **UI/UX, state management, and component design**
* Built as part of a frontend assignment

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
