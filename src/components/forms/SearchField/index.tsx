import styled from "styled-components/macro";
import searchIcon from "../../../assets/images/search.png";
import { useBandsContext } from "../../../context/bandsContext";
import { useState } from "react";
import { Band } from "../../../isobar";

const SearchField = () => {
  const { bands, setBands } = useBandsContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [initialBands, setInitialBands] = useState<Band[]>([]);

  const handleInputChange = (e: any) => {
    if (e.target.value.length === 0) setBands(initialBands);
    setSearchTerm(e.target.value);
  };

  const filterBandsBySearchTerm = () => {
    setInitialBands(bands);
    let regSearchTerm = new RegExp(searchTerm, "ig");
    const filteredBands = bands.filter((band: Band) => {
      return band.name.match(regSearchTerm);
    });

    setBands(filteredBands);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setBands(initialBands);
  };

  return (
    <InputWrapper>
      {searchTerm.length > 0 && (
        <ClearButton onClick={clearSearch}>x</ClearButton>
      )}
      <Input value={searchTerm} onChange={handleInputChange} />
      <InputIcon onClick={filterBandsBySearchTerm} src={searchIcon} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 50px 5px 25px;
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

const ClearButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 2px;
  background-color: #eee;
  border: none;
  border-radius: 15px;
  color: #ccc;
  cursor: pointer;
`;

export default SearchField;
