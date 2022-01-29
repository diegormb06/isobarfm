import {useState} from "react";
import api from "./api";
import {Band} from "../isobar";

const useBandsService = () => {
  const [bandsFetchLoading, setBandsFetchLoading] = useState(false);

  const getBands = async (): Promise<Band[] | null> => {
    try {
      setBandsFetchLoading(true);
      const bands = await api.get('/bands');
      return bands.data
    } catch (e: any) {
      console.log(e.message)
      return null;
    }
  }

  const getBandsById = () => {

  }

  const getAlbums = () => {

  }

  return {bandFetchLoading: bandsFetchLoading, getBands, getBandsById, getAlbums}
}

export default useBandsService;