import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = async (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => {
        return user._id !== id;
      });
    });
  };

  console.log(users);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <th>{user._id}</th>
                  <td>{user.email}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
