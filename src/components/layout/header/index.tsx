import styled from "styled-components/macro";
import SearchField from "../../forms/SearchField";
import logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <SearchField />
      <Logo src={logo} alt="logo isobarfm"/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: #FF5B2A;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`

const Logo = styled.img`
  width: 110px;
  margin-left: 15px;
`;

export default Header;