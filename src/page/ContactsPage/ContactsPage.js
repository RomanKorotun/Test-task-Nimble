import { ContactsForm } from "../../components/ContactsForm/ContactsForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";

import { ContactsContainerPosition } from "./ContactsPage.styled";

const ContactsPage = () => {
  return (
    <ContactsContainerPosition>
      <ContactsForm />
      <ContactsList />
    </ContactsContainerPosition>
  );
};

export default ContactsPage;
