import React from "react";
import { Grid } from "@mui/material";
import Main from './components/Main/Main';
import Details from "./components/Details/Details";
import useStyles from './styles';
const App = () => {
    const classes=useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.item}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
