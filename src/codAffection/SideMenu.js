import React from 'react';
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
    side_menu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100 %',
        backgroundColor: '#253053',
    }
})

const SideMenu = () => {
    const classes = useStyles();
    console.log(classes);

    return (
        <div className={classes.side_menu}>

        </div>
    );
};

export default SideMenu;