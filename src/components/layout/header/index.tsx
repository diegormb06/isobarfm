import styled from "styled-components/macro";
import SearchField from "../../forms/SearchField";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  searchField?: boolean;
}

const Header = ({ searchField }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer searchField={searchField}>
      {searchField ? (
        <SearchField />
      ) : (
        <BackButton onClick={() => navigate("/")}>
          <svg
            height="20"
            width="20"
            id="chevron-left"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="transparent"
              fill="#fff"
              d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"
            />
          </svg>
        </BackButton>
      )}
      <Logo src={logo} alt="logo isobarfm" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<HeaderProps>`
  position: relative;
  background-color: #ff5b2a;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: ${({ searchField }) =>
    searchField ? "space-between" : "center"};
  padding: 15px;
`;

const BackButton = styled.button`
  background: none;
  outline: none;
  border: none;
  position: absolute;
  left: 15px;
  color: #fff;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-left: 20px;
`;

export default Header;
