import React, {useState, useContext} from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { ExpenseTrackerContext} from '../../../context/context';
import useStyles from './styles';
import {v4 as uuid4} from 'uuid';
import {incomeCategories, expenseCategories} from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';

const initialState={
    amount: '',
    category:'',
    type:'Income',
    date:formatDate(new Date()),
}
const Form = () => {
    const classes=useStyles();
    const [formData, setFormData]=useState(initialState);
    const {addTransaction}=useContext(ExpenseTrackerContext);
    const createTransaction=()=>{
        const transaction={...formData, amount:Number(formData.amount), id:uuid4()}
        addTransaction(transaction);
        setFormData(initialState);
    }
    const selectedCategories=formData.type==='Income'?incomeCategories:expenseCategories;
  return (
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>

            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth variant="standard">
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e)=>{
                    setFormData({...formData, type:e.target.value})
                }}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth variant="standard">
                <InputLabel>Catergory</InputLabel>
                <Select value={formData.category} onChange={(e)=>setFormData({...formData, category:e.target.value})}>
                    {selectedCategories.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" variant="standard" label="Amount" fullWidth value={formData.amount} onChange={(e)=>setFormData({...formData, amount:e.target.value})} sx={{ mt: -2 } }></TextField>
        </Grid>
         <Grid item xs={6}>
            <TextField type="date" variant="standard" fullWidth value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})}></TextField>
        </Grid>
        <Grid item xs={12} style={{padding: '20px'}}>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
      </Grid>
  )
}

export default Form
