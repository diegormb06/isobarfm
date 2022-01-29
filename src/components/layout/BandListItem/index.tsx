import Avatar from "../../datadisplay/avatar";
import styled from "styled-components/macro";

const BandListItem = () => {
  return (
    <BandListItemWrapper>
      <Avatar
        source="https://lastfm.freetls.fastly.net/i/u/300x300/261324c8d05d42babb0cbdef8c204494.png"
        size="small"
      />
      <BandInfo>
        <BandName>3 Doors Down</BandName>
        <BandPlays>4471468 plays</BandPlays>
      </BandInfo>
    </BandListItemWrapper>
  )
}

const BandListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const BandInfo = styled.div`
  padding: 10px;
  
`;

const BandName = styled.h3`
  margin: 0;
  text-transform: uppercase;
  color: #646464
`;

const BandPlays = styled.p`
  color: #8d8d8d;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export default BandListItem