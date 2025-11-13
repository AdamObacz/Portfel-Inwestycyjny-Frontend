import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:4000/api/users");
      return data;
    },
  });
};
