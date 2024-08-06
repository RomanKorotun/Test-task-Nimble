import {
  ContactList,
  Contact,
  ContactsWrapper,
  ContactsListTitle,
  ErrorCard,
  LoadingCard,
} from "./ContactsList.styled";

import { useNavigate } from "react-router-dom";
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { useGetContactsQuery } from "../../redux/apiSlice";

export const ContactsList = () => {
  const { data: contacts, error, isLoading: loading } = useGetContactsQuery();
  const navigate = useNavigate();
  return (
    <>
      <ContactsWrapper>
        {loading && <LoadingCard>Loadind...</LoadingCard>}
        {error && <ErrorCard>Error. Please reload the page...</ErrorCard>}
        {contacts?.resources.length > 0 && (
          <div>
            <ContactsListTitle>Contacts</ContactsListTitle>
            <ContactList>
              {contacts.resources.map((contact) => {
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
