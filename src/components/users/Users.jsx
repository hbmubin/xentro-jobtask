import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import useGetUsers from "../../hooks/useGetUsers";
import { BarLoader } from "react-spinners";
import { useState } from "react";

const Users = () => {
  const { users, usersLoading, usersError } = useGetUsers();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  const sortedUsers = [...filteredUsers].sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
  return (
    <div className=" bg-white dark:bg-slate-800 p-3 rounded-md text-nowrap">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center  sm:pr-3 ">
        <h1 className="text-2xl font-semibold sm:pl-4 dark:text-neutral-200">All Users</h1>
        <div className="flex sm:flex-row flex-col sm:items-center gap-6 sm:mt-0 mt-3">
          <div className="inline-flex items-center justify-between bg-white dark:bg-slate-800 pl-5 py-1 rounded-xl border border-neutral-200 dark:border-slate-700">
            <input onChange={(e) => setSearch(e.target.value)} className="xl:w-96 py-1 outline-none bg-white dark:bg-slate-800 dark:placeholder:text-neutral-500 dark:text-neutral-300" type="text" placeholder="Search user" />
            <span className="px-3 text-neutral-500">
              <HiMiniMagnifyingGlass size={20} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-neutral-500">Sort by ID</div>
            <div className="relative">
              <select
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full focus:bg-bgGray bg-transparent placeholder:text-neutral-500 text-slate-700 dark:text-neutral-500 text-sm border border-neutral-200 rounded-md pl-3 pr-8 py-2 transition duration-200 ease focus:outline-none  appearance-none cursor-pointer dark:border-neutral-500 dark:focus:bg-slate-800 font-semibold"
              >
                <option value="asc">Ascending</option>
                <option value="des">Descending</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-3 sm:mx-3 my-3  overflow-auto">
        <table className="w-full user-table rounded-md">
          <thead>
            <tr className="font-normal text-neutral-500 uppercase text-xs bg-[#e6e4f1] dark:bg-gray-600 dark:text-slate-300">
              <th>
                <p>User id</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Email</p>
              </th>
              <th>
                <p>City</p>
              </th>
              <th>
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.length > 0
              ? sortedUsers.map((user) => (
                  <tr className="hover:bg-[#fbfaff] duration-200 even:bg-bgGray even:dark:bg-gray-700 even:hover:bg-[#ece6f9] even:duration-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:even:hover:bg-slate-700" key={user.id}>
                    <td>
                      <p>{user.id}</p>
                    </td>
                    <td>
                      <p className="font-semibold">{user.name}</p>
                    </td>
                    <td>
                      <p>{user.email}</p>
                    </td>
                    <td>
                      <p>{user.address.city}</p>
                    </td>
                    <td>
                      <a href={`/users/${user.id}`} className="bg-indigo-500  text-white inline-block px-3 hover:shadow-xl active:scale-95 duration-200 py-1.5 rounded-2xl text-sm cursor-pointer">
                        View details
                      </a>
                    </td>
                  </tr>
                ))
              : !usersLoading && (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-orange-500">
                      No users found
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>
      <BarLoader color="#d1d5dc " loading={usersLoading} width="100%" aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
};

export default Users;
