import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: allData = [], refetch } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/alltask/email?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(allData)

  return [allData, refetch];
};

export default useTask;
