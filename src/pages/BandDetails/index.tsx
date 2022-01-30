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
  const { getAlbums } = useBandService();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (bands.length < 1) getBands();
    const active = bands.find((band: Band) => band.id === id);
    setActiveBand(active);
  }, [bands, id]);

  useEffect(() => {
    getAlbums().then((albumsData) => {
      if (albumsData) {
        const activeBandAlbums = albumsData.filter((album: any) => {
          return album.band === activeBand?.id;
        });
        setAlbums(activeBandAlbums);
      }
    });
  }, [activeBand]);

  return (
    <div>
      <Header />
      <BandImage coverImage={activeBand?.image} />
      <BandIntro>
        <h2>{activeBand?.name}</h2>
        <BandStatus>
          <BandStatsText align="right">{activeBand?.genre}</BandStatsText>
          <Avatar source={activeBand?.image} size="large" />
          <BandStatsText align="left">
            {activeBand?.numPlays} plays
          </BandStatsText>
        </BandStatus>
      </BandIntro>
      <p>{activeBand?.biography}</p>
      <GridOfAlbums>
        {albums.map((album: any) => (
          <img src={album?.image} alt="" />
        ))}
      </GridOfAlbums>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

const BandStatsText = styled.p<{ align: string }>`
  flex: 1;
  text-align: ${({ align = "left" }) => align};
  text-transform: uppercase;
  padding: 0 1rem;
  font-size: 0.8rem;
  color: #6c6c6c;
  font-weight: 500;
  position: relative;
  top: 13px;
`;

const GridOfAlbums = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    max-width: 100%;
  }
`;

export default BandDetails;
