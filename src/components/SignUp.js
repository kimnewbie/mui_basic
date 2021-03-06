import * as React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
    Button,
    TextField,
    FormControlLabel,
    Avatar,
    Checkbox,
    Grid,
    Typography,
    Paper,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
} from '@mui/material';

const SignUp = () => {
    const paperStyle = {
        padding: 20,
        height: '100vh',
        width: 300,
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar sx={{ bgcolor: '#1bbd7e' }}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <Typography component="h2" variant="h5">Sign Up</Typography>
                    <Typography variant='caption'>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField
                        fullWidth label='Name'
                        variant='standard'
                        placeholder='Put your name'
                    />
                    <TextField
                        fullWidth label='Email'
                        variant='standard'
                        placeholder='Put your email'
                    />
                    <FormControl component='fieldset' style={{ marginTop: 15 }}>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="male"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        fullWidth label='Phone Number'
                        variant='standard'
                        placeholder='Put your phone number'
                    />
                    <TextField
                        fullWidth label='Password'
                        variant='standard'
                        type='password'
                        placeholder='Put your password'
                    />
                    <TextField
                        fullWidth label='Confirm Password'
                        variant='standard'
                        type='password'
                        placeholder='Check your password'
                    />
                    <FormControlLabel // lable??? ???????????? checkbox ??????
                        control={
                            <Checkbox
                                value='agreement'
                                name='checkedA'
                                color='primary'
                            />
                        }
                        label='I accept the terms and conditions.'
                        style={{ marginRight: 'auto' }}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                    >
                        Sign Up
                    </Button>
                </form>
            </Paper >
        </Grid >
    );
}

export default SignUp;