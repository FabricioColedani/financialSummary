function financialSummary(transactions, threshold = 1000) {
  if (!Array.isArray(transactions)) {
    throw new Error("Las transacciones deben ser un array");
  }

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;
  const totalTransactions = transactions.length;

  const incomeCount = transactions.filter(t => t.type === "income").length;
  const expenseCount = transactions.filter(t => t.type === "expense").length;
  const avgIncome = incomeCount > 0 ? totalIncome / incomeCount : 0;
  const avgExpense = expenseCount > 0 ? totalExpense / expenseCount : 0;

  const largeTransactions = transactions.filter(t => t.amount >= threshold);

  return {
    balance,
    totalTransactions,
    avgIncome,
    avgExpense,
    largeTransactions
  };
}

module.exports = { financialSummary };
