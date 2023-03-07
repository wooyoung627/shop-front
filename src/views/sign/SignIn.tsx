import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../../components/common/Typography';
import AppFooter from '../layout/AppFooter';
import AppAppBar from '../layout/AppAppBar';
import AppForm from '../layout/AppForm';
import { id, required } from '../../components/form/validation';
import RFTextField from '../../components/form/RFTextField';
import FormButton from '../../components/form/FormButton';
import FormFeedback from '../../components/form/FormFeedback';
import withRoot from '../../components/withRoot';
import { axiosApi } from '../../components/api/axiosApi';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../app/hook';
import { setUserReducer, User } from '../../reducers/userReducer';
import Authority from '../../const/Authority';

interface SignForm {
  id: string;
  password: string;
}

interface LoginResult extends User {
  result : boolean;
}

function SignIn() {
  const [sent, setSent] = React.useState(false);

  const dispatch = useAppDispatch();

  // const validate = (values: { [index: string]: string }) => {
  //   const errors = required(['email', 'password'], values);

  //   if (!errors.email) {
  //     const emailError = email(values.email);
  //     if (emailError) {
  //       errors.email = emailError;
  //     }
  //   }

  //   return errors;
  // };

  const validate = (values: { [index: string]: string }) => {
    const errors = required(['id', 'password'], values);

    if (!errors.id) {
      const idError = id(values.id);
      if (idError) {
        errors.id = idError;
      }
    }

    return errors;
  };

  const handleSubmit = async () => {
    setSent(true);
    let form = new FormData();
    form.set('userId', 'user');
    form.set('password', '1234');
    const res = await axiosApi.post('/login', form);

    let loginResult : LoginResult = res.data;
    if(loginResult.result){
      console.log(loginResult)
      // dispatch(setUserReducer(loginResult));
    }else{
      setSent(false);
    }
  };

  const get = async () => {
    console.log("GET SEND");
    const res = await axiosApi.get('/');
    console.log(res.data);
  }

  const param = async () => {
    console.log("GET SEND");
    const res = await axiosApi.get('/param?userId=test');
    console.log(res.data);
  }

  const post = async () => {
    console.log("POST SEND");
    const res = await axiosApi.post('/', {'test':'1234'});
    console.log(res.data);
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/sign-up"
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="id"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Id"
                margin="normal"
                name="id"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign In'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/forgot-password">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <Button onClick={handleSubmit}>{'CLICK'}</Button>
      <Button onClick={get}>{'GET'}</Button>
      <Button onClick={param}>{'PARAM'}</Button>
      <Button onClick={post}>{'POST'}</Button>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
