import { useState } from "react";
import ExpenseList from "./expenseTracker/components/ExpenseList";
import ExpensesFilter from "./expenseTracker/components/ExpensesFilter";
import ExpenseForm from "./expenseTracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Food", amount: 10, category: "Utilities" },
    { id: 2, description: "Oil", amount: 10, category: "Utilities" },
    { id: 3, description: "Gas", amount: 10, category: "Utilities" },
    { id: 4, description: "Oven", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpensesFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
