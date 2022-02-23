import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SignIn = () => {
    return (
        <Container>
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
                    name="email"
                    autoComplete="email" // 커서 기본 이동
                />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label='Password'
                    type='password' // 보이지 않게
                    name="password"
                    autoComplete='current-password'
                />
                <FormControlLabel // lable을 클릭해도 checkbox 선택
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
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
                        <Link>Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link>Sign Up</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
}

export default SignIn;