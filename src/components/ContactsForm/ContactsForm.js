import { Formik } from "formik";
import * as Yup from "yup";
import {
  ButtonSubmitForm,
  ContactsFormCard,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
  LabelStyled,
  LabelTitle,
  TitleForm,
} from "./ContactsForm.styled";

import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/apiSlice";

const RegexpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(RegexpEmail, "Invalid email")
    .required("Required"),
});

export const ContactsForm = () => {
  const [addContact] = useAddContactMutation();
  const { refetch } = useGetContactsQuery();
  return (
    <ContactsFormCard>
      <TitleForm>Create Contact</TitleForm>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={async (values, actions) => {
          await addContact({
            fields: {
              "first name": [{ value: values.firstName }],
              "last name": [{ value: values.lastName }],
              email: [{ value: values.email }],
            },
            record_type: "person",
            privacy: {
              edit: null,
              read: null,
            },
            owner_id: null,
          });
          await refetch();
          actions.resetForm();
        }}
      >
        <FormStyled>
          <LabelStyled>
            <LabelTitle>First Name</LabelTitle>
            <FieldStyled name="firstName" />
            <ErrorMsgStyled component="div" name="firstName" />
          </LabelStyled>

          <LabelStyled>
            <LabelTitle>Last Name</LabelTitle>
            <FieldStyled name="lastName" />
            <ErrorMsgStyled component="div" name="lastName" />
          </LabelStyled>

          <LabelStyled>
            <LabelTitle>Email</LabelTitle>
            <FieldStyled name="email" type="email" />
            <ErrorMsgStyled component="div" name="email" />
          </LabelStyled>

          <ButtonSubmitForm type="submit">Add Contact</ButtonSubmitForm>
        </FormStyled>
      </Formik>
    </ContactsFormCard>
  );
};
