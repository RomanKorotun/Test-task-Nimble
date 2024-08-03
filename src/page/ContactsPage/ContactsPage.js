import { ContactsForm } from "../../components/ContactsForm/ContactsForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { Container } from "../../GlobalStyled";
import { ContactsContainerPosition } from "./ContactsPage.styled";

const ContactsPage = () => {
  return (
    <Container>
      <ContactsContainerPosition>
        <ContactsForm />
        <ContactsList />
      </ContactsContainerPosition>
    </Container>
  );
};

export default ContactsPage;
