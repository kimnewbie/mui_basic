import React, { useState } from 'react';
import 'fontsource-roboto';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, red, green, deepPurple, purple } from '@mui/material/colors';
import { Delete, Favorite, FavoriteBorder, Gradient, Save, MenuOutlined } from '@mui/icons-material';
import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
    Container,
    Paper,
    Grid,
    AppBar,
    Toolbar,
    IconButton,
} from '@mui/material';

const theme = createTheme({
    // palette: {
    //     primary: {
    //         main: deepPurple[500],
    //     },
    //     secondary: {
    //         main: purple[500]
    //     }
    // },
    typography: {
        h2: {
            fontSize: 36,
            fontWeight: 'bold',
            // backgroundColor: '#333'
        }
    }
});

const useStyles = makeStyles({
    root: {
        padding: '100px 100px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        border: '1px solid #333'
    },
    btn_group: {
        display: 'flex',
        gap: 5,
        boxShadow: 'none !important',
    },
    btn: {
        background: 'linear-gradient(45deg, #333, #1976d2)',
        border: 0,
        borderRadius: 15,
        color: 'white !important',
        padding: '0 30px',
    },
    paperStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1976d2 !important',
        height: 75,
        width: '100%',
    }
});

const ButtonStyled = () => {
    const classes = useStyles();
    return <Button className={classes.btn}>Test Styled Button</Button>
}

const CheckboxExample = () => {
    const [checked, setChecked] = useState();
    return (
        <FormControlLabel
            control={
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    // color='success'
                    sx={{ color: '#673ab7', '&.Mui-checked': { color: red[800] } }}
                    inputProps={{
                        'aria-label': 'secondary checkbox'
                    }}
                />
            }
            label='Testing Checkbox'
        />
    );
}

const TestPage = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container>{/* padding이 생김 */}
                <div className={classes.root}>
                    <AppBar color='secondary'>
                        <Toolbar>
                            <IconButton>
                                <MenuOutlined />
                            </IconButton>
                            <Typography variant='h6'>
                                MUI Theming
                            </Typography>
                            <Button style={{ background: '#fff' }}>
                                LogIn
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Typography variant='h2' component='div'>
                        Practice MUI Library
                    </Typography>
                    <Typography variant='subtitle1'>
                        Learn how to use components of MUI
                    </Typography>
                    <>
                        <ButtonStyled />
                    </>
                    <>
                        <Grid container spacing={6} justifyContent='center'>
                            <Grid item xs={3} sm={6}> {/* sm은 한줄이되 비율이 6 */}
                                <Paper className={classes.paperStyle}>
                                    Paper1
                                </Paper>
                            </Grid>
                            <Grid item xs={3} sm={6}>
                                <Paper className={classes.paperStyle}>
                                    Paper2
                                </Paper>
                            </Grid>
                            <Grid item xs={3} sm={6}>
                                <Paper className={classes.paperStyle}>
                                    Paper3
                                </Paper>
                            </Grid>
                        </Grid>
                    </>
                    <>
                        <CheckboxExample />
                    </>
                    <>
                        <TextField
                            variant='outlined' //'filled' | 'outlined' | 'standard'
                            color='secondary'
                            type='email' // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
                            label='email' // placeholder에 있다가 포커스되면 상단으로 이동
                            // value='youjinkim@test.com'
                            placeholder='youjinkim@test.com' // 라벨이 위로 올라가면 보임
                        />
                    </>
                    <>
                        <ButtonGroup
                            variant='contained'
                            size='large'
                            className={classes.btn_group}
                        >
                            <Button
                                // disabled
                                // endIcon={<MusicNoteOutlined />}
                                startIcon={<Save />}
                                color='primary'
                            >
                                Save
                            </Button>
                            <Button
                                startIcon={<Delete />}
                                color='secondary'
                            >
                                Discard
                            </Button>
                        </ButtonGroup>
                    </>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default TestPage;