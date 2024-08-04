import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/operations";
import { useContact } from "../../hooks/useContact";
import { ButtonStyled, FieldStyled, FormStyled } from "./OneContactForm.styled";

export const OneContactForm = () => {
  const dispath = useDispatch();
  const { contact } = useContact();
  return (
    <Formik
      initialValues={{
        value: "",
      }}
      onSubmit={(values, actions) => {
        dispath(
          updateContact({
            contactId: contact.id,
            tagsObj: { tags: values.value.split(" ") },
          })
        );
        actions.resetForm();
      }}
    >
      <FormStyled>
        <FieldStyled name="value" />
        <ButtonStyled type="submit">Add tag</ButtonStyled>
      </FormStyled>
    </Formik>
  );
};
