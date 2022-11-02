import { FC, InputHTMLAttributes } from "react";

import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  //if label exists render the label
  //className depends if it is filled or not
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value && //if it exists
              typeof otherProps.value === "string" && //value can come back as a number. else it has no length
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
