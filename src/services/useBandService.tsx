import api from "./api";
import { useState } from "react";
import { Band } from "../isobar";
import { useBandsContext } from "../context/bandsContext";
import { AxiosResponse } from "axios";

const useBandsService = () => {
  const [bandsFetchLoading, setBandsFetchLoading] = useState(false);
  const { setBands } = useBandsContext();

  const getBands = (): void => {
    setBandsFetchLoading(true);
    api
      .get("/bands")
      .then((bands: AxiosResponse<Band[]>) => {
        setBandsFetchLoading(false);
        setBands(bands.data);
        return;
      })
      .catch((e) => {
        console.log(e.message);
        setBandsFetchLoading(false);
        return;
      });
  };

  const getBandsById = () => {};

  const getAlbums = () => {};

  return {
    bandsFetchLoading,
    getBands,
    getBandsById,
    getAlbums,
  };
};

export default useBandsService;
