import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Heading, IconButton } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';

// interface Props {

// }

const Register = () => {
  return (
    <Wrapper size='sm'>
      <Heading>Register</Heading>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={values => {
          // tslint:disable-next-line
          console.log({ values });
        }}
      >
        {() => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            <Button
              // isLoading={!!isSubmitting}
              marginTop={5}
              type='submit'
              colorScheme="teal"
              aria-label="Register"
              size="lg"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;