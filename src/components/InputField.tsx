import { FormControl, Box, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useField } from "formik";
import React, { ReactElement } from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  name: string,
  size?: string,
};

function InputField(props: InputFieldProps): ReactElement {
  const [field, { error }] = useField(props);

  return (
    <Box marginTop={5}>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
        <Input
          {...props}
          {...field}
          id={field.name}
          placeholder={props.placeholder}
        />
        {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
}

export default InputField;
