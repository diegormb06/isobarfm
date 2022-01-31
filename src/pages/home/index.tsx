import Header from "../../components/layout/header";
import BandListItem from "../../components/layout/BandListItem";
import styled from "styled-components/macro";
import useBandService from "../../services/useBandService";
import { useEffect, useState } from "react";
import { Band } from "../../isobar";
import { useBandsContext } from "../../context/bandsContext";
import filterImage from "../../assets/images/order_by.png";
import noResultsImage from "../../assets/images/no_results.png";
import LoadingDisk from "../../components/feedback/LoadingDisk";

const Home = () => {
  const { bands, searchStatus } = useBandsContext();
  const { getBands } = useBandService();
  const [orderedBands, setOrderedBands] = useState<Band[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (bands.length < 1) getBands();
  }, []);

  useEffect(() => {
    setOrderedBands(bands);
  }, [bands]);

  const sortListByProperty = (property: string) => {
    let sortOrder = 1;
    if (property === "name") sortOrder = -1;

    return (a: any, b: any) => {
      const result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  const sortBandsByProp = (prop: string) => {
    const orderBands = orderedBands.sort(sortListByProperty(prop));
    setOrderedBands(orderBands);
    setOpen(false);
  };

  if (searchStatus) {
    return (
      <div>
        <Header searchField />
        <ResultsCount>
          <p>{orderedBands.length} results</p>
          <OrderControlContainer>
            <OrderButton src={filterImage} onClick={() => setOpen(!open)} />
            {open && (
              <OrderOptionsList>
                <OrderOptionsItem onClick={() => sortBandsByProp("name")}>
                  Ordem Alfabética
                </OrderOptionsItem>
                <OrderOptionsItem onClick={() => sortBandsByProp("numPlays")}>
                  Polularidade
                </OrderOptionsItem>
              </OrderOptionsList>
            )}
          </OrderControlContainer>
        </ResultsCount>
        <NoresultsImage src={noResultsImage} alt="noresults image" />
      </div>
    );
  }

  return (
    <div>
      <Header searchField />
      <ResultsCount>
        <p>{orderedBands.length} results</p>
        <OrderControlContainer>
          <OrderButton src={filterImage} onClick={() => setOpen(!open)} />
          {open && (
            <OrderOptionsList>
              <OrderOptionsItem onClick={() => sortBandsByProp("name")}>
                Ordem Alfabética
              </OrderOptionsItem>
              <OrderOptionsItem onClick={() => sortBandsByProp("numPlays")}>
                Polularidade
              </OrderOptionsItem>
            </OrderOptionsList>
          )}
        </OrderControlContainer>
      </ResultsCount>
      {orderedBands.length == 0 ? (
        <LoadingDisk />
      ) : (
        <BandListContainer>
          {orderedBands?.map((band: Band) => (
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

const ResultsCount = styled.div`
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

const OrderControlContainer = styled.div`
  position: relative;
`;

const OrderButton = styled.img`
  border: none;
  width: 30px;
  cursor: pointer;
  position: relative;
  top: 1.5px;
`;

const OrderOptionsList = styled.div`
  position: absolute;
  right: 0;
  top: 32px;
  width: 150px;
`;

const OrderOptionsItem = styled.p`
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

const NoresultsMessage = styled.p`
  max-width: 50%;
  max-height: 100%;
  margin: 30px auto;
  display: block;
`;

const NoresultsImage = styled.img`
  max-width: 50%;
  max-height: 100%;
  margin: 30px auto;
  display: block;
`;

export default Home;
