import { NotFoundCard } from "./NotFoundPage.styled";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <NotFoundCard>
      <div>
        Such a page does not exist. Please go to the&nbsp;
        <Link to="/">homepage</Link>
      </div>
    </NotFoundCard>
  );
};

export default NotFoundPage;
