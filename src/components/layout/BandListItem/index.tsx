import Avatar from "../../datadisplay/avatar";
import styled from "styled-components/macro";
import {Band} from "../../../isobar";
import { Link } from "react-router-dom";

interface BandListItemProps {
  band: Band;
}

const BandListItem = ({band}:BandListItemProps) => {
  return (
    <Link to={`band/${band.id}`} >
      <BandListItemWrapper>
        <Avatar
          source={band.image}
          size="small"
        />
        <BandInfo>
          <BandName>{band.name}</BandName>
          <BandPlays>{band.numPlays} plays</BandPlays>
        </BandInfo>
      </BandListItemWrapper>
    </Link>
  )
}

const BandListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(221, 221, 221, 0.35);
  transition: all 200ms ease;

  &:hover, &:active {
    background-color: #f5f5f5;
  }
`;

const BandInfo = styled.div`
  padding: 10px;
`;

const BandName = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  color: #646464
`;

const BandPlays = styled.p`
  color: #8d8d8d;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export default BandListItem