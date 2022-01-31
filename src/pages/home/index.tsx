import Header from "../../components/layout/header";
import BandListItem from "../../components/layout/BandListItem";
import styled from "styled-components/macro";
import useBandService from "../../services/useBandService";
import { useEffect } from "react";
import { Band } from "../../isobar";
import { useBandsContext } from "../../context/bandsContext";
import filterImage from "../../assets/images/order_by.png";
import FilterControl from "../../components/layout/FilterControl";

const Home = () => {
  const { bands } = useBandsContext();
  const { getBands, getAlbums, bandsFetchLoading } = useBandService();

  useEffect(() => {
    if (bands.length < 1) getBands();
  }, []);

  return (
    <div>
      <Header searchField />
      <SearchResults>
        <p>{bands.length} results</p>
        <FilterControl />
      </SearchResults>
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

const SearchResults = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 15px;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #6c6c6c;
    font-size: 0.8rem;
  }
`;

export default Home;
