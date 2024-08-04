import { useContact } from "../../hooks/useContact";
import {
  FirstName,
  Image,
  InfoUser,
  ItemsTags,
  LastName,
  ListTags,
  OneContactWrapper,
  TitleTags,
  UserWrapper,
} from "./OneContact.styled";

export const OneContact = () => {
  const { contact } = useContact();
  return (
    <>
      <OneContactWrapper>
        <UserWrapper>
          <Image src={contact?.avatar_url} alt="avatar" />
          <InfoUser>
            <div>
              <FirstName>
                {contact?.fields?.["first name"]?.[0]?.value}
              </FirstName>
              &nbsp;
              <LastName>{contact?.fields?.["last name"]?.[0]?.value}</LastName>
            </div>
            <p>{contact?.fields?.["email"]?.[0]?.value}</p>
          </InfoUser>
        </UserWrapper>
        {contact.tags.length > 0 && (
          <>
            <TitleTags>Tags</TitleTags>
            <ListTags>
              {contact.tags.map((item) => (
                <ItemsTags key={item?.id}>{item?.tag}</ItemsTags>
              ))}
            </ListTags>
          </>
        )}
      </OneContactWrapper>
    </>
  );
};
