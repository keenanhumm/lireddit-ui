import React from "react";
import { Formik, Form } from "formik";
import { Button, Heading } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";

// interface Props {

// }

const Register = () => {
  const [{ }, registerUser] = useRegisterMutation();
  const router = useRouter();

  return (
    <Wrapper size="sm">
      <Heading>Register</Heading>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await registerUser(values);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            router.push("/");
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
              type="submit"
              colorScheme="teal"
              aria-label="Register"
              size="lg"
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;