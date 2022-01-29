import Header from "../../components/layout/header";
import BandListItem from "../../components/layout/BandListItem";
import styled from "styled-components/macro";
import useBandService from "../../services/useBandService";
import {useEffect, useState} from "react";
import {Band} from "../../isobar";

const Home = () => {
  const {getBands, bandFetchLoading} = useBandService()
  const [bandList, setBandList] = useState<Band[] | null>(null)

  useEffect(() => {
    getBands().then((bandData) => setBandList(bandData));
  }, [getBands])

  return (
    <div>
      <Header />
      <BandListContainer>
        {bandList?.map((band:Band) => <BandListItem/>)}
      </BandListContainer>
    </div>
  );
}

const BandListContainer = styled.main`
  padding: 15px 30px;
`;

export default Home;