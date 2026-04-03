import React, { useState } from "react";
import "../styles/TransactionTable.css";
import { IoSearch } from "react-icons/io5";
import * as XLSX from "xlsx";
import { Modal, Button } from "react-bootstrap";

const TransactionTable = ({ data = [], role, setTransactions, darkMode }) => {

  // Search and filter function 
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredData = data
    .filter(t => filter === "all" || t.type === filter)
    .filter(t =>
      t.category.toLowerCase().includes(search.toLowerCase())
    );


  // Modal update 
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.date || !formData.amount || !formData.category) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    setTransactions(prev => {
      const updatedData = [newTransaction, ...prev];

      // save to localStorage
      localStorage.setItem("transactions", JSON.stringify(updatedData));
      return updatedData; // THIS updates UI instantly
    });

    setShowModal(false);

    setFormData({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  // Export xcel
  const exportExcel = () => {
    const formattedData = data.map(t => ({
      date: t.date,
      amount: t.amount,
      category: t.category,
      type: t.type,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    XLSX.writeFile(workbook, "transactions.xlsx");
  };

  return (
    <div className={darkMode ? "table-container dark" : "table-container light"}>

      {role === "admin" && (
        <button className="add-btn" onClick={handleShow}>+ Add Transaction</button>
      )}

      <div className="table-header">
        <h3>Transactions</h3>
        <div className="table-controls">
          <div>
            <button onClick={exportExcel} className="export-btn">
              Export Excel
            </button>
          </div>
          <div className="search-wrapper">
            <IoSearch className="icon" />
            <input
              type="text"
              placeholder="Search category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <select onChange={(e) => setFilter(e.target.value)} className="caterory">
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="table mt-2 mb-2">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No transactions found
                </td>
              </tr>
            ) : (
              filteredData.map(t => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>₹ {t.amount}</td>
                  <td>{t.category}</td>
                  <td>{t.type}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <h4>Add Transaction</h4>
        </Modal.Header>

        <Modal.Body>

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-control mb-2"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Button onClick={handleSubmit}>Add</Button>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          </div>

        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TransactionTable;