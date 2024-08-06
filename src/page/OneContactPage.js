import { useParams } from "react-router-dom";
import { OneContact } from "../components/OneContact/OneContact";
import { OneContactForm } from "../components/OneContactForm/OneContactForm";

import { useGetContactByIdQuery } from "../redux/apiSlice";

const OneContactPage = () => {
  const { contactId } = useParams();
  const { data: contact } = useGetContactByIdQuery(contactId);
  console.log(contact);
  return (
    <>
      {contact?.resources.length > 0 && (
        <>
          <OneContact contact={contact.resources} />
          <OneContactForm contact={contact.resources} />
        </>
      )}
    </>
  );
};

export default OneContactPage;
