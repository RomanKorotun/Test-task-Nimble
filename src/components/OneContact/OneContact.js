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

export const OneContact = ({ contact }) => {
  console.log(contact);
  return (
    <>
      <OneContactWrapper>
        <UserWrapper>
          <Image src={contact[0].avatar_url} alt="avatar" />
          <InfoUser>
            <div>
              <FirstName>
                {contact[0].fields?.["first name"][0].value}
              </FirstName>
              &nbsp;
              <LastName>{contact[0].fields["last name"][0].value}</LastName>
            </div>
            <p>{contact[0].fields["email"][0].value}</p>
          </InfoUser>
        </UserWrapper>
        {contact[0].tags?.length > 0 && (
          <>
            <TitleTags>Tags</TitleTags>
            <ListTags>
              {contact[0].tags
                .map((item) => <ItemsTags key={item.id}>{item.tag}</ItemsTags>)
                .reverse()}
            </ListTags>
          </>
        )}
      </OneContactWrapper>
    </>
  );
};
