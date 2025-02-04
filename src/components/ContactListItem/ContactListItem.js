import {
  UserWrapper,
  Image,
  InfoUser,
  FirstName,
  LastName,
  ListTags,
  ItemsTags,
  ButtonClose,
} from "./ContactListItem.styled";
import sprite from "../../image/sprite.svg";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../redux/apiSlice";

export const ContactListItem = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();
  const { refetch } = useGetContactsQuery();
  return (
    <>
      <UserWrapper>
        <Image src={contact?.avatar_url} alt="avatar" />
        <InfoUser>
          <div>
            <FirstName>{contact?.fields?.["first name"]?.[0]?.value}</FirstName>
            &nbsp;
            <LastName>{contact?.fields?.["last name"]?.[0]?.value}</LastName>
          </div>
          <p>{contact?.fields?.["email"]?.[0]?.value}</p>
        </InfoUser>
      </UserWrapper>
      {contact.tags.length > 0 && (
        <ListTags>
          {contact.tags.map((item) => (
            <ItemsTags key={item?.id}>{item?.tag}</ItemsTags>
          ))}
        </ListTags>
      )}
      <ButtonClose
        onClick={async (e) => {
          e.stopPropagation();
          await deleteContact(contact.id);
          await refetch();
        }}
      >
        <svg width={22} height={24}>
          <use href={`${sprite}#close-icon`}></use>
        </svg>
      </ButtonClose>
    </>
  );
};
