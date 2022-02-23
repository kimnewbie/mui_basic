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
    Paper,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignIn = ({ onChangeTabsValue }) => {
    const initialValuesForSignIn = {
        email: '',
        password: '',
        rememberMe: false
    }
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 300,
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required('Required'),
        password: Yup.string().required('Required')
    });
    const onSubmitSignIn = (values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false); // 버튼 누르고 disabled 됐다가 버튼 풀림
        });
    }
    return (
        <Grid>
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
                    <Typography component="h2" variant="h5">
                        Sign in
                    </Typography>
                    <Formik
                        initialValues={initialValuesForSignIn}
                        onSubmit={onSubmitSignIn}
                        validationSchema={validationSchema}
                    >
                        {
                            (props) => (
                                <Form>
                                    {console.log(props)}
                                    <Field as={TextField}
                                        required
                                        fullWidth
                                        margin="normal" // 위에 간격 주기
                                        label='Email Address'
                                        placeholder='Enter your Email Address'
                                        name='email'
                                        variant='standard'
                                        autoComplete='email' // 커서 기본 이동
                                        helperText={<ErrorMessage name='email' />}
                                    />
                                    <Field as={TextField}
                                        required
                                        fullWidth
                                        margin='normal'
                                        label='Password'
                                        placeholder='Enter your password'
                                        type='password' // 보이지 않게
                                        name='password'
                                        variant='standard'
                                        autoComplete='current-password'
                                        helperText={<ErrorMessage name='password' />}
                                    />
                                    <Field as={FormControlLabel} // lable을 클릭해도 checkbox 선택
                                        name='rememberMe'
                                        control={
                                            <Checkbox
                                                value='rememberMe'
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
                                        disabled={props.isSubmitting}
                                        sx={{ mt: 3, mb: 2 }} // style
                                    >
                                        {
                                            props.isSubmitting ?
                                                'Loading ' : 'Sign in'
                                        }
                                    </Button>
                                </Form>
                            )
                        }
                    </Formik>
                    <Grid container> {/* 행 */}
                        <Grid item xs> {/* xs는 앞에 공간 다 차지하기 */}
                            <Link href='#'>Forgot password?</Link>
                        </Grid>
                        <Grid item>
                            <Typography>Do you have an account?
                                <Link href='#' onClick={() => onChangeTabsValue('event', 1)}>Sign Up</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid >
    );
}

export default SignIn;