import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Heading } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
import toErrorMap from '../utils/toErrorMap';

// interface Props {

// }

const Register = () => {
  const [{ }, registerUser] = useRegisterMutation();
  return (
    <Wrapper size='sm'>
      <Heading>Register</Heading>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await registerUser(values);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          }
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