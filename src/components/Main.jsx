import React, { useState } from "react";
import "../styles/Main.css";
import SideNav from "./SideNav";
import SummaryCard from "./SmmaryCard";
import BalanceChart from "./BalanceChart";
import CategoryChart from "./CategoryChart";
import TransactionTable from "./TransactionTable";
import { transactions as initialData } from "../data/mockData";

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activePage, setActivePage] = useState("dashboard");
    const [role, setRole] = useState("viewer");
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : initialData;
    });

    // ✅ Calculations
    const income = transactions
        .filter(t => t.type === "income")
        .reduce((a, b) => a + b.amount, 0);

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((a, b) => a + b.amount, 0);

    const balance = income - expenses;

    // ✅ Balance Chart Data
    let runningBalance = 0;
    const chartData = transactions.map(t => {
        runningBalance += t.type === "income" ? t.amount : -t.amount;
        return {
            date: t.date,
            balance: runningBalance,
        };
    });

    // ✅ Category Data
    const categoryMap = {};
    transactions.forEach(t => {
        if (t.type === "expense") {
            categoryMap[t.category] =
                (categoryMap[t.category] || 0) + t.amount;
        }
    });

    const categoryData = Object.keys(categoryMap).map(key => ({
        category: key,
        value: categoryMap[key],
    }));

    // ✅ Insights
    const highestCategory = Object.entries(categoryMap).sort(
        (a, b) => b[1] - a[1]
    )[0];

    //   Monthly comparison 
    const monthlyData = {};

    transactions.forEach(t => {
        const month = t.date.slice(0, 7); // "2026-04"

        if (!monthlyData[month]) {
            monthlyData[month] = 0;
        }

        if (t.type === "expense") {
            monthlyData[month] += t.amount;
        }
    });

    const months = Object.keys(monthlyData);
    const lastMonth = months[months.length - 1];
    const prevMonth = months[months.length - 2];

    let comparison = "";

    if (lastMonth && prevMonth) {
        const diff = monthlyData[lastMonth] - monthlyData[prevMonth];

        if (diff > 0) {
            comparison = `📈 Expenses increased by ₹${diff}`;
        } else if (diff < 0) {
            comparison = `📉 Expenses decreased by ₹${Math.abs(diff)}`;
        } else {
            comparison = "No change in expenses";
        }
    }

    // useful observation 
    const observation =
        expenses > income
            ? " You are spending more than you earn"
            : " Good job! You are saving money";


    return (
        <div className={darkMode ? "app dark" : "app light"}>
            <div className="layout">

                 {/* Sidebar  */}
                <SideNav activePage={activePage} setActivePage={setActivePage} />

                {/* Main Content */}
<div className="main">

                    {/* Top Bar */}
<div className="top-bar">
                        {/* <h1
                            style={{
                                color: darkMode ? "#0f172a" : "#0f172a",
                                transition: "0.3s",
                            }}
                        >
                            Finance Dashboard
                        </h1> */}

<h1 className="title">Finance Dashboard</h1>

                        <div className="top-btns">
                         <div className="top-two-btns">
                               <select value={role} onChange={(e) => setRole(e.target.value)} >
                                <option value="viewer">Viewer</option>
                                <option value="admin">Admin</option>
                            </select>
                         </div>
                         <div className="top-two-btns">
                             <button onClick={() => setDarkMode(!darkMode)} >
                                {darkMode ? "☀️ Light" : "🌙 Dark"}
                            </button>
                           </div>
                        </div>
                    </div>

                    {/* Dashboard */}
                    {activePage === "dashboard" && (
                        <>
                            {/* Cards */}
<div className="card-row">                                <SummaryCard title="Balance" amount={balance} darkMode={darkMode} />
                                <SummaryCard title="Income" amount={income} darkMode={darkMode} />
                                <SummaryCard title="Expenses" amount={expenses} darkMode={darkMode} />
                            </div>

                            {/* Charts */}
                            <div className="chart-row">
                                <div className="chart-box">
                                    <BalanceChart data={chartData} darkMode={darkMode} />
                                </div>

                               <div className="chart-box">
                                    <CategoryChart data={categoryData} darkMode={darkMode} />
                                </div>
                                <div className="chart-box">
                                    {/* <div
                                        style={{
                                            ...styles.insights,
                                            background: darkMode ? "#1e293b" : "#fff",
                                            color: darkMode ? "#e2e8f0" : "#000",
                                        }}> */}
                                        <div className="chart-box">
                                        <h3>Insights</h3>
                                        <p>🏆 Highest Spending: <b>{highestCategory?.[0] || "N/A"}</b></p>
                                        <p>💰 Savings: <b>₹ {balance}</b></p>
                                        <p>
                                            📊 Monthly Trend: <b>{comparison || "Not enough data"}</b>
                                        </p>

                                        <p>
                                            💡 Insight: <b>{observation}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </>
                    )}

                    {/* Transactions Page */}
                    {activePage === "transactions" && (
                        <>
                            <TransactionTable
                                data={transactions}
                                role={role}
                                setTransactions={setTransactions}
                                darkMode={darkMode}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


export default Main;