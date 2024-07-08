import React from 'react';

const Statistics = ({ stats }) => {
  return (
    <div className="statistics">
      <div className="stat-box">
        <h3>Total Sales Amount:</h3>
        <p>${stats.totalSales.toFixed(2)}</p>
      </div>
      <div className="stat-box">
        <h3>Total Sold Items:</h3>
        <p>{stats.totalSoldItems}</p>
      </div>
      <div className="stat-box">
        <h3>Total Not Sold Items:</h3>
        <p>{stats.totalNotSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;