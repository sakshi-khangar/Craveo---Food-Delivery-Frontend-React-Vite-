// import React, { useEffect, useState } from "react";
// import { getAllUsers } from "../../api/auth";

// import "../css/AdminDashboard.css";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const res = await getAllUsers(token);
//       setUsers(res.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="users-page">
//       <header className="admin-header">
//         <h2>All Users</h2>
//         <p>Everyone registered on Craveo</p>
//       </header>

//       {loading ? (
//         <p className="users-loading">Loading users...</p>
//       ) : (
//         <div className="users-grid">
//           {users.map((user) => (
//             <div className="user-card" key={user.id}>
//               <div className="user-avatar">
//                 {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//               </div>
//               <div className="user-info">
//                 <h3>{user.name || "No Name"}</h3>
//                 <p className="user-email">{user.email}</p>
//                 <p className="user-phone">{user.phone || "No phone"}</p>
//                 <span className={`user-role-badge ${user.role?.toLowerCase()}`}>
//                   {user.role}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {!loading && users.length === 0 && (
//         <p className="users-empty">No users found.</p>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/auth";
import "../css/User.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await getAllUsers(token);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="users-page">

      <header className="admin-header">
        <div>
          <h2>👥 All Users</h2>
          <p>Manage everyone registered on Craveo.</p>
        </div>

        <div className="users-count-card">
          <h3>{users.length}</h3>
          <span>Total Users</span>
        </div>
      </header>

      {loading ? (
        <p className="users-loading">Loading Users...</p>
      ) : users.length > 0 ? (

        <div className="users-grid">

          {users.map((user) => (
            <div className="user-card" key={user.id}>

              <div className="user-avatar">
                {user.name
                  ? user.name.charAt(0).toUpperCase()
                  : "U"}
              </div>

              <div className="user-info">

                <h3>{user.name || "No Name"}</h3>

                <p className="user-id">
                  ID : #{user.id}
                </p>

                <p className="user-email">
                  📧 {user.email}
                </p>

                <p className="user-phone">
                  📱 {user.phone || "Not Available"}
                </p>

                <span
                  className={`user-role-badge ${user.role?.toLowerCase()}`}
                >
                  {user.role}
                </span>

              </div>

            </div>
          ))}

        </div>

      ) : (
        <div className="users-empty">
          <h3>No Users Found</h3>
          <p>No registered users available.</p>
        </div>
      )}

    </div>
  );
}