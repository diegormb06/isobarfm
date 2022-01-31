import Header from "../../components/layout/header";
import styled from "styled-components/macro";
import { useBandsContext } from "../../context/bandsContext";
import { useEffect, useState } from "react";
import { Band } from "../../isobar";
import { useParams } from "react-router-dom";
import useBandService from "../../services/useBandService";
import Avatar from "../../components/datadisplay/avatar";
import LoadingDisk from "../../components/feedback/LoadingDisk";
import { formatNumber } from "../../helpers";

const BandDetails = () => {
  const { getBands } = useBandService();
  const { bands } = useBandsContext();
  const { id } = useParams();
  const [activeBand, setActiveBand] = useState<Band | undefined>();
  const { getAlbums } = useBandService();
  const [albums, setAlbums] = useState([]);
  const [openReadMore, setOpenReadMore] = useState(false);

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
            {formatNumber(activeBand?.numPlays)} plays
          </BandStatsText>
        </BandStatus>
      </BandIntro>
      <BandBiografy open={openReadMore}>
        {activeBand?.biography}
        <BandBiografyReadMore
          open={openReadMore}
          onClick={() => setOpenReadMore(!openReadMore)}
        />
      </BandBiografy>
      <SectionTitle>Albums</SectionTitle>
      {albums.length === 0 ? (
        <LoadingDisk />
      ) : (
        <GridOfAlbums>
          {albums.map((album: any) => (
            <img key={album.id} src={album?.image} alt="" />
          ))}
        </GridOfAlbums>
      )}
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

const BandBiografy = styled.div<{ open: boolean }>`
  position: relative;
  padding: 15px;
  height: ${({ open }) => (open ? "auto" : "130px")};
  overflow: hidden;
  margin-bottom: 15px;
  text-align: justify;
  transition: all 300ms ease-out;
`;

const BandBiografyReadMore = styled.div<{ open: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: white;
  height: 50px;
  width: 100%;
  max-width: 100vw;
  box-shadow: 0 -33px 30px #fff;
  cursor: pointer;
  display: ${({ open }) => (open ? "none" : "block")};

  &:before {
    content: "";
    display: block;
    position: relative;
    top: 50%;
    height: 1px;
    width: 100%;
    background-color: #eee;
  }

  &:after {
    content: "+";
    color: #6c6c6c;
    text-align: center;
    font-size: 2rem;
    display: block;
    position: relative;
    top: 0;
    left: calc(50vw - 20px);
    height: 40px;
    width: 40px;
    background-color: #fff;
  }
`;

const SectionTitle = styled.h3`
  color: #6c6c6c;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  font-weight: normal;
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
