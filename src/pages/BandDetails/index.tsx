import Header from "../../components/layout/header";
import styled from "styled-components/macro";
import { useBandsContext } from "../../context/bandsContext";
import { useEffect, useState } from "react";
import { Band } from "../../isobar";
import { useParams } from "react-router-dom";
import useBandService from "../../services/useBandService";
import Avatar from "../../components/datadisplay/avatar";

const BandDetails = () => {
  const { getBands } = useBandService();
  const { bands } = useBandsContext();
  const { id } = useParams();
  const [activeBand, setActiveBand] = useState<Band | null>(null);

  useEffect(() => {
    if (bands.length < 1) getBands();
    const active = bands.find((band: Band) => band.id === id);
    console.log("bandas", bands, "banda ativa", active, id);
    setActiveBand(active);
  }, [bands, id]);

  return (
    <div>
      <Header />
      <BandImage coverImage={activeBand?.image} />
      <BandIntro>
        <h2>{activeBand?.name}</h2>
        <BandStatus>
          <p>{activeBand?.genre}</p>
          <Avatar source={activeBand?.image} size="large" />
          <p>{activeBand?.numPlays} plays</p>
        </BandStatus>
      </BandIntro>
      <p>{activeBand?.biography}</p>
    </div>
  );
};

const BandImage = styled.div<{ coverImage?: string }>`
  min-height: 30vh;
  background: ${({ coverImage }) =>
    `url(${coverImage}) no-repeat center center`};
  background-size: cover;
`;

const BandIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -90px;
`;

const BandStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;

  p {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default BandDetails;
