import {useContext} from 'react';
import { ExpenseTrackerContext} from './context/context';
import { incomeCategories, expenseCategories, resetCategories} from './constants/categories';

const useTransactions=(title)=>{
    resetCategories();
    const {transactions}=useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter(
      (t) => t.type.trim().toLowerCase() === title.trim().toLowerCase()
    );
    
    const total = transactionsPerType.reduce(
      (acc, currValue) => (acc += currValue.amount),
      0
    );
    const categories=title.toLowerCase()==='income'?incomeCategories:expenseCategories;
    
    transactionsPerType.forEach((t)=>{
      const category = categories.find(
        (c) => c.type.toLowerCase() === t.category.toLowerCase()
      );
      if(category)
        category.amount+=t.amount;
    });

    const filteredCategories=categories.filter((c)=>c.amount>0);
    const chartData={
      datasets:[{
        data:filteredCategories.map((c)=>c.amount),
        backgroundColor:filteredCategories.map((c)=>c.color)
      }],
       labels: filteredCategories.map((c)=>c.type),
    }

    return {total, chartData};
}

export default useTransactions;


