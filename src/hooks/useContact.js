import { useSelector } from "react-redux";
import { contactSelector } from "../redux/contact/contactSelectors";

export const useContact = () => {
  const contact = useSelector(contactSelector);
  return {
    contact,
  };
};
