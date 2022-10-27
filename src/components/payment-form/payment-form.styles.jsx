import styled from "styled-components";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

export const PaymentFormContainer = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: gray dotted 1px; //added
  padding: 0px 20px; //added
`;

export const FormContainer = styled.form`
  //height: 100px;//removed
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const NameInput = styled(FormInput)`
  //added
  border: 1px solid gray;
  margin: 5px 0;
`;

export const CardElementContainer = styled.div`
  //added
  border: 1px solid gray;
  padding: 12px 5px;
`;
