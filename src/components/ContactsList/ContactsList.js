import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allContacts } from "../../redux/operations";
import {
  ContactList,
  Contact,
  ContactsWrapper,
  ContactsListTitle,
  ErrorCard,
  LoadingCard,
} from "./ContactsList.styled";
import { useContacts } from "../../hooks/useContacts";
import { useNavigate } from "react-router-dom";
import { ContactListItem } from "../ContactListItem/ContactListItem";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contacts, loading, error } = useContacts();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);
  return (
    <>
      <ContactsWrapper>
        {loading && <LoadingCard>Loadind...</LoadingCard>}
        {error && <ErrorCard>Error. Please reload the page...</ErrorCard>}
        {contacts.length > 0 && (
          <div>
            <ContactsListTitle>Contacts</ContactsListTitle>
            <ContactList>
              {contacts.map((contact) => {
                return (
                  <Contact
                    key={contact.id}
                    onClick={() => navigate(`/contact/${contact.id}`)}
                  >
                    <ContactListItem contact={contact} />
                  </Contact>
                );
              })}
            </ContactList>
          </div>
        )}
      </ContactsWrapper>
    </>
  );
};
