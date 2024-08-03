import { useSelector } from "react-redux";
import {
  contactsSelector,
  errorSelector,
  loadingSelector,
} from "../redux/contacts/contactsSelectors";

export const useContacts = () => {
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  const contacts = useSelector(contactsSelector);
  return {
    loading,
    error,
    contacts,
  };
};
