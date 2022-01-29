import styled from "styled-components/macro";
import SearchField from "../../forms/SearchField";
import logo from '../../../assets/images/logo.png'
import {useNavigate} from "react-router-dom";

interface HeaderProps {
  searchField?:boolean
}

const Header = ({searchField}:HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer searchField={searchField}>
      {
        searchField
          ? <SearchField/>
          : <BackButton onClick={() => navigate('/')}> x </BackButton>
      }
      <Logo src={logo} alt="logo isobarfm"/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header<HeaderProps>`
  background-color: #FF5B2A;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: ${({searchField}) => searchField ? 'space-between' : 'center' }  ;
  padding: 15px;
`

const BackButton = styled.button`
  background: none;
  outline: none;
  border: none;
  position: absolute;
  left: 15px;
  color: #fff;
`

const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-left: 20px;
`;

export default Header;