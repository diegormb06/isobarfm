import {useState} from "react";
import api from "./api";

const useBandsService = () => {
  const [bandsFetchLoading, setBandsFetchLoading] = useState(false);

  const getBands = async () => {
    try {
      setBandsFetchLoading(true);
      const bands = await api.get('/bands');
      return bands.data
    } catch (e: any) {
      console.log(e.message)
    }
  }

  const getBandsById = () => {

  }

  const getAlbums = () => {

  }

  return {bandFetchLoading: bandsFetchLoading, getBands, getBandsById, getAlbums}
}