import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allContacts, deleteContact } from "../../redux/operations";
import {
  ContactList,
  ContactListItem,
  ContactsListTitle,
  ErrorCard,
  FirstName,
  Image,
  InfoUser,
  ItemsTags,
  LastName,
  ListTags,
  LoadingCard,
  UserWrapper,
} from "./ContactsList.styled";
import sprite from "../../image/sprite.svg";
import { ButtonClose } from "../ContactsList/ContactsList.styled";
import { useContacts } from "../../hooks/useContacts";

export const ContactsList = () => {
  const dispatch = useDispatch();

  const { contacts, loading, error } = useContacts();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);
  return (
    <>
      {loading && <LoadingCard>Loadind...</LoadingCard>}
      {error && <ErrorCard>Error. Please reload the page...</ErrorCard>}
      {contacts.length > 0 && (
        <div>
          <ContactsListTitle>Contacts</ContactsListTitle>
          <ContactList>
            {contacts.map((contact) => {
              return (
                <ContactListItem key={contact.id}>
                  <UserWrapper>
                    <Image src={contact?.avatar_url} alt="avatar" />
                    <InfoUser>
                      <div>
                        <FirstName>
                          {contact?.fields?.["first name"]?.[0]?.value}
                        </FirstName>
                        &nbsp;
                        <LastName>
                          {contact?.fields?.["last name"]?.[0]?.value}
                        </LastName>
                      </div>
                      <p>{contact?.fields?.["email"]?.[0]?.value}</p>
                    </InfoUser>
                  </UserWrapper>
                  <ListTags>
                    {contact.tags.map((item) => (
                      <ItemsTags key={item?.id}>{item?.tag}</ItemsTags>
                    ))}
                  </ListTags>
                  <ButtonClose
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    <svg width={22} height={24}>
                      <use href={`${sprite}#close-icon`}></use>
                    </svg>
                  </ButtonClose>
                </ContactListItem>
              );
            })}
          </ContactList>
        </div>
      )}
    </>
  );
};
