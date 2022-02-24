import './App.css';
import { makeStyles } from '@mui/styles';
import SideMenu from "./codAffection/SideMenu";
import Header from './codAffection/Header';
import React from 'react';
import { CssBaseline } from '@mui/material';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;