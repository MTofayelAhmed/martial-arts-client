import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = ()=> {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: admitted = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });
  return [admitted]
}




export default usePayment;