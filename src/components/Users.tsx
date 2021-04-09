import { useEffect } from "react";
import { reqResApi } from "../api/requestResponse";
import { ReqRespListado } from "../interfaces/reqResponse";

export const Users = () => {
  useEffect(() => {
    reqResApi
      .get<ReqRespListado>("users")
      .then((res) => {
        console.log(res.data.data[0].first_name);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};
