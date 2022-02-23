import React, { useState } from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SignInOutContainer = () => {
    const [tabsValue, setTabsValue] = useState();

    const onChangeTabsValue = (event, tabsValue) => {
        setTabsValue(tabsValue);
    };

    return (
        <Box sx={{ width: 320, margin: '20px auto' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={tabsValue}
                    onChange={onChangeTabsValue}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label=""
                >
                    <Tab label="Sign In" {...a11yProps(0)} />
                    <Tab label="Sign Up" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={tabsValue} index={0}>
                <SignIn onChangeTabsValue={onChangeTabsValue} />
            </TabPanel>
            <TabPanel value={tabsValue} index={1}>
                <SignUp />
            </TabPanel>
        </Box>
    );
}

export default SignInOutContainer;