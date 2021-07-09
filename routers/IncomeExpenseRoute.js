const express = require("express");
const incomeExpenseController = require("../controllers/IncomeExpenseController");

const router = express.Router();

router.post("/getAll", incomeExpenseController.getAllData);
router.post("/add", incomeExpenseController.addTransaction);

module.exports = router;
