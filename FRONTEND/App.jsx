// // App.js

// import React, { useState, useEffect } from 'react';
// import TransactionsTable from './TransactionsTable';
// import Pagination from './Pagination';
// import SearchBar from './SearchBar';
// import Statistics from './BarChart';
// import BarChart from './BarChart';
// import './App.css';

// function App() {
//   const [transactions, setTransactions] = useState([]);
//   const [month, setMonth] = useState('March');
//   const [searchText, setSearchText] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchTransactions();
//   }, [month, searchText, currentPage]);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/transactions?month=${month}&search=${searchText}&page=${currentPage}`);
//       const data = await response.json();
//       setTransactions(data.transactions);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleMonthChange = (e) => {
//     setMonth(e.target.value);
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="App">
      

//       <div className="heading1">
//       <h1>Transactions</h1>
//       <h1>Dashboard</h1>
//       </div>
      
      
//       <div className="filters">
//         <select value={month} onChange={handleMonthChange}>
//           {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//             <option key={index} value={month}>{month}</option>
//           ))}
//         </select>
//         <SearchBar value={searchText} onChange={handleSearchChange} />
//       </div>
//       <TransactionsTable transactions={transactions} />
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onNext={handleNextPage}
//         onPrevious={handlePreviousPage}
//       />
//     </div>
//   );
// }

// export default App;
// App.js
//*********************************************************************************************************** */
// import React, { useState, useEffect } from 'react';
// import TransactionsTable from './TransactionsTable';

// import Statistics from './Statistics';
// import Barchart from './BarChart';
// import Pagination from './Pagination';
// import SearchBar from './SearchBar';
// import './App.css';

// function App() {
//   const [transactions, setTransactions] = useState([]);
//   const [month, setMonth] = useState('March');
//   const [searchText, setSearchText] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [stats, setStats] = useState({ totalSales: 0, totalSoldItems: 0, totalNotSoldItems: 0 });
//   const [barChartData, setBarChartData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTransactions();
//   }, [month, searchText, currentPage]);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/transactions?month=${month}&search=${searchText}&page=${currentPage}`);
//       const data = await response.json();
//       setTransactions(data.transactions);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   const fetchStatistics = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/statistics?month=${month}`);
//       const data = await response.json();
//       setStats(data);
//     } catch (error) {
//       console.error('Error fetching statistics:', error);
//     } finally {
//       setLoading(false);
//     }
//   };


//   const fetchBarChartData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/barchart?month=${month}`);
//       const data = await response.json();
//       setBarChartData(data);
//     } catch (error) {
//       console.error('Error fetching bar chart data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleMonthChange = (e) => {
//     setMonth(e.target.value);
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="App">
      

//       <div className="heading1">
//       <h1>Transactions</h1>
//       <h1>Dashboard</h1>
//       </div>
      
      
//       <div className="filters">
//         <select value={month} onChange={handleMonthChange}>
//           {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//             <option key={index} value={month}>{month}</option>
//           ))}
//         </select>
//         <SearchBar value={searchText} onChange={handleSearchChange} />
//       </div>

//       {/* {loading ? (
//         <p>Loading...</p>
//       ) : (
//       <> */}
//       <TransactionsTable transactions={transactions} />
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onNext={handleNextPage}
//         onPrevious={handlePreviousPage}
//       />
//       {/* <Statistics stats={stats} />
//       <BarChart data={barChartData} />
//       </>
//       )} */}
       
//     </div>
//   );
// }

// export default App;
//****************************** */
import React, { useState, useEffect } from 'react';
import TransactionsTable from './TransactionsTable';
import Statistics from './Statistics';
import BarChart from './BarChart';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState('March');
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState({ totalSales: 0, totalSoldItems: 0, totalNotSoldItems: 0 });
  const [barChartData, setBarChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
    fetchStatistics();
    fetchBarChartData();
  }, [month, searchText, currentPage]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/transactions?month=${month}&search=${searchText}&page=${currentPage}`);
      const data = await response.json();
      setTransactions(data.transactions);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/statistics?month=${month}`);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const fetchBarChartData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/barchart?month=${month}`);
      const data = await response.json();
      setBarChartData(data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="App">
      <div className="heading1">
        <h1>Transactions</h1>
        <h1>Dashboard</h1>
      </div>
      
      <div className="filters">
        <select value={month} onChange={handleMonthChange}>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
        <SearchBar value={searchText} onChange={handleSearchChange} />
      </div>

      <TransactionsTable transactions={transactions} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
      <Statistics stats={stats} />
      <BarChart data={barChartData} />
    </div>
  );
}

export default App;
