import styled from "styled-components/macro";

const SearchField = () => {
  return (
    <>
      <Input />
      <InputIcon />
    </>
  )
}

const Input = styled.input`
  padding-right: 50px;
`;

const InputIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export default SearchField;