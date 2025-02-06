import { useQuery } from "@tanstack/react-query";

const useGetUsers = () => {
  const { data: users = [], isLoading: usersLoading, error: usersError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`); 
      }

      return response.json();
    },
  });

  return { users, usersLoading, usersError };
};

export default useGetUsers;
