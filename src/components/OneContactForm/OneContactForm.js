import { Formik } from "formik";

import { ButtonStyled, FieldStyled, FormStyled } from "./OneContactForm.styled";
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from "../../redux/apiSlice";

export const OneContactForm = ({ contact }) => {
  const [updateContact] = useUpdateContactMutation();
  const { refetch } = useGetContactByIdQuery(contact[0].id);

  return (
    <Formik
      initialValues={{
        value: "",
      }}
      onSubmit={async (values, actions) => {
        await updateContact({
          contactId: contact[0].id,
          tagsObj: { tags: values.value.split(" ") },
        });
        await refetch(contact[0].id);

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
