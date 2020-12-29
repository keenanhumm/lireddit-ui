import { Button, Container, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useCreateUserAreaMutation } from "../generated/graphql";
import InputField from "./InputField";

const CreateAreaForm = () => {
  const router = useRouter();
  const [, createUserArea] = useCreateUserAreaMutation();

  return (
    <Container>
      <Heading>
        New Area
      </Heading>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => createUserArea(values).then(() => router.push("/areas"))}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="name"
              placeholder="What is the area called?"
              label="Name"
            />
            <Button
              isLoading={!!isSubmitting}
              marginTop={5}
              type="submit"
              background="cyan.700"
              color="white"
              aria-label="Create area"
              size="lg"
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>

    </Container>
  );
};

export default CreateAreaForm;
