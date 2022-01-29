import styled from "styled-components/macro";
import searchIcon from "../../../assets/images/search.png"

const SearchField = () => {
  return (
    <InputWrapper>
      <Input />
      <InputIcon src={searchIcon} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding-right: 50px;
  height: 30px;
  border: none;
  border-radius: 2px;
`;

const InputIcon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 10px;
`;

export default SearchField;