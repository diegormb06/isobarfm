import Header from "../../components/layout/header";
import BandListItem from "../../components/layout/BandListItem";
import styled from "styled-components/macro";
import useBandService from "../../services/useBandService";
import { useEffect } from "react";
import { Band } from "../../isobar";
import { useBandsContext } from "../../context/bandsContext";

const Home = () => {
  const { bands } = useBandsContext();
  const { getBands, getAlbums, bandsFetchLoading } = useBandService();

  useEffect(() => {
    if (bands.length < 1) getBands();
  }, []);

  return (
    <div>
      <Header searchField />
      {bandsFetchLoading ? (
        <p>Carregando</p>
      ) : (
        <BandListContainer>
          {bands?.map((band: Band) => (
            <BandListItem key={band.id} band={band} />
          ))}
        </BandListContainer>
      )}
    </div>
  );
};

const BandListContainer = styled.main`
  padding: 15px 30px;
`;

export default Home;
