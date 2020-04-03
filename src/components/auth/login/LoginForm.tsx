import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {Formik, Form, FormikHelpers} from 'formik';
import {Snackbar, TextField, Typography} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {API_URL} from '../../../../config';
import {useStyles} from "./styled";

interface LoginValues {
    username: string,
    password: string
}

const LoginForm = (props: any) => {
    const classes = useStyles();
    const [notification, setOpenNotification] = useState({
        open: false,
        status: 'error',
        text: ''
    });

    const login = async (values: LoginValues, actions: FormikHelpers<LoginValues>): Promise<any> => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(values)
        });

        actions.setSubmitting(false);

        if (response.status === 200) {
            let token = await response.json();
            setOpenNotification({
                open: true,
                status: 'success',
                text: response.statusText
            });
            localStorage.setItem('token', token.token);
            props.history.push('/user')
        } else {
            setOpenNotification({
                open: true,
                status: 'error',
                text: response.statusText
            });
            throw new Error(response.statusText);
        }
    };

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.login}>
                <Typography variant="h3" className={classes.title}>
                    Login
                </Typography>
                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={(values, actions) => {
                        login(values, actions);
                    }}
                >
                    {props => (
                        <Form>
                            <div>
                                <TextField
                                    id="standard-basic"
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.username}
                                    name="username"
                                    label="Username"
                                    variant="outlined"
                                    className={classes.loginInput}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-basic1"
                                    type="password"
                                    onChange={props.handleChange}
                                    value={props.values.password}
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    className={classes.loginInput}
                                />
                            </div>
                            <div>
                                <Button type="submit" variant="contained" color="primary" size="large"
                                        className={classes.loginInput}>
                                    Login
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <Snackbar open={notification.open} autoHideDuration={4000}>
                    {
                        notification.status === 'error' ?
                            <Alert severity="error">
                                {notification.text}
                            </Alert> :
                            <Alert severity="success">
                                {notification.text}
                            </Alert>
                    }
                </Snackbar>
            </div>
        </div>
    )
};

export default LoginForm;