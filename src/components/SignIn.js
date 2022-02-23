import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Button,
    TextField,
    FormControlLabel,
    Avatar,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    Paper,
} from '@mui/material';

const SignIn = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 280,
        margin: '20px auto'
    }
    return (
        <Container>
            <Paper elevation={10} style={paperStyle}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> {/* m: margin */}
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        margin="normal" // 위에 간격 주기
                        label='Email Address'
                        placeholder='Enter your Email Address'
                        name='email'
                        variant='standard'
                        autoComplete='email' // 커서 기본 이동 
                    />
                    <TextField
                        required
                        fullWidth
                        margin='normal'
                        label='Password'
                        placeholder='Enter your password'
                        type='password' // 보이지 않게
                        name='password'
                        variant='standard'
                        autoComplete='current-password'
                    />
                    <FormControlLabel // lable을 클릭해도 checkbox 선택
                        control={
                            <Checkbox
                                value='remember'
                                color='primary'
                            />
                        }
                        label='Remember me'
                        style={{ marginRight: 'auto' }}
                    />
                    <Button
                        fullWidth
                        type='submit'
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }} // style
                    >
                        Sign in
                    </Button>
                    <Grid container> {/* 행 */}
                        <Grid item xs> {/* xs는 앞에 공간 다 차지하기 */}
                            <Link href='#'>Forgot password?</Link>
                        </Grid>
                        <Grid item>
                            <Typography>Do you have an account?
                                <Link href='#'>Sign Up</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container >
    );
}

export default SignIn;