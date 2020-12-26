import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { Button, Heading } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useLoginUserMutation, useMeQuery } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";

const Login = () => {
  const [{ }, loginUser] = useLoginUserMutation();
  const router = useRouter();
  const [{ data }] = useMeQuery();
  const { me } = data || {};

  useEffect(() => {
    if (me) { router.push("/"); }
  }, [me]);

  return (
    <Wrapper size="sm">
      <Heading>Log in</Heading>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await loginUser(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
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
              isLoading={!!isSubmitting}
              marginTop={5}
              type="submit"
              colorScheme="teal"
              aria-label="Register"
              size="lg"
            >
              log in
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;