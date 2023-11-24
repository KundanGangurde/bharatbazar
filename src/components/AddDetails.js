import React, { useState } from 'react';

const AddDetails = () => {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = transactions.reduce((a, b) => a + b.deposit - b.withdraw, 0) + deposit - withdraw;
    setTransactions(transactions.concat([{ date, deposit, withdraw, balance }]));
    setDate('');
    setDeposit(0);
    setWithdraw(0);
  };

  return (
    <div style={{marginTop:"10%"}}>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required/>
        <input type="number" value={deposit} onChange={e => setDeposit(+e.target.value)} min="0" placeholder="Deposit amount" required/>
        <input type="number" value={withdraw} onChange={e => setWithdraw(+e.target.value)} min="0" placeholder="Withdraw amount" required/>
        <button type="submit">Add Transaction</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Deposited Amount</th>
            <th>Withdraw Amount</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) =>
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>${transaction.deposit}</td>
              <td>${transaction.withdraw}</td>
              <td>${transaction.balance}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddDetails;