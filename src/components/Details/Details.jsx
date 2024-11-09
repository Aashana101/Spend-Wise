import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@mui/material';
import { Doughnut } from 'react-chartjs-2'; 
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useTransactions from '../../useTransactions';
import useStyles from '../styles';    
const Details = ({title}) => {
  const classes=useStyles();
  const {total, chartData}=useTransactions(title);

  Chart.register(ArcElement, Tooltip, Legend);
  return (
    <Card className={title==="Income"?classes.income:classes.expenses}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant="h5">${total}</Typography>
            <Doughnut data={chartData} options={{
                    plugins: {
                        legend: {
                            display: true, // Display legend
                            position: 'top', // Position of the legend
                            labels: {
                                font: {
                                    size: 14, // Font size for legend labels
                                },
                                usePointStyle: true, // Use point style for categories (circles)
                                color: 'black', // Color of the legend text
                            }
                        }
                    }
                }}/>
        </CardContent>
    </Card>
  );
}

export default Details
