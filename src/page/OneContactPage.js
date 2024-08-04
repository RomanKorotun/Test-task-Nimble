import { useParams } from "react-router-dom";
import { OneContact } from "../components/OneContact/OneContact";
import { OneContactForm } from "../components/OneContactForm/OneContactForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { oneGetContact } from "../redux/operations";
import { useContact } from "../hooks/useContact";

const OneContactPage = () => {
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const { contact } = useContact();

  useEffect(() => {
    dispatch(oneGetContact(contactId));
  }, [contactId, dispatch]);

  return (
    <>
      {contact && (
        <>
          <OneContact />
          <OneContactForm />
        </>
      )}
    </>
  );
};

export default OneContactPage;
