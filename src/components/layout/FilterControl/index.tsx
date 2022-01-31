import styled from "styled-components/macro";
import filterImage from "../../../assets/images/order_by.png";
import { useState } from "react";

const FilterControl = () => {
  const [open, setOpen] = useState(false);
  return (
    <FilterContainer>
      <FilterButton src={filterImage} onClick={() => setOpen(!open)} />
      {open && (
        <FilterOptionsList>
          <FilterOptionsItem>Ordem Alfabética</FilterOptionsItem>
          <FilterOptionsItem>Polularidade</FilterOptionsItem>
        </FilterOptionsList>
      )}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  position: relative;
`;

const FilterButton = styled.img`
  border: none;
  width: 30px;
  cursor: pointer;
  position: relative;
  top: 1.5px;
`;

const FilterOptionsList = styled.div`
  position: absolute;
  right: 0;
  top: 32px;
  width: 150px;
`;

const FilterOptionsItem = styled.p`
  color: #fff !important;
  background-color: #6c6c6c;
  text-transform: uppercase;
  padding: 10px 10px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #868686;
  }
`;

export default FilterControl;
