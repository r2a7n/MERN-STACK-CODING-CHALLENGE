// transactions.js

import express from 'express';
import dbConnect from '../mongodb.js'; // Ensure correct path

const router = express.Router();

// Helper function to convert month name to number
const getMonthNumber = (monthName) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames.indexOf(monthName) + 1;
};

// Statistics route
router.get('/statistics', async (req, res) => {
  const { month } = req.query;

  // Convert month name to number
  const monthNumber = getMonthNumber(month);
  if (monthNumber === 0) {
    return res.status(400).json({ message: 'Invalid month parameter' });
  }

  try {
    const collection = await dbConnect();
    
    // Filter transactions by the selected month
    const query = {
      $expr: {
        $eq: [{ $month: { $dateFromString: { dateString: "$dateOfSale" } } }, monthNumber]
      }
    };

    // Fetch all transactions for the selected month
    const transactions = await collection.find(query).toArray();

    // Calculate statistics
    let totalSaleAmount = 0;
    let totalSoldItems = 0;
    let totalNotSoldItems = 0;

    transactions.forEach(transaction => {
      if (transaction.sold) {
        totalSaleAmount += transaction.price;
        totalSoldItems += 1;
      } else {
        totalNotSoldItems += 1;
      }
    });

    res.json({
      month,
      totalSaleAmount,
      totalSoldItems,
      totalNotSoldItems
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).send('Error fetching statistics.');
  }
});

export default router;
