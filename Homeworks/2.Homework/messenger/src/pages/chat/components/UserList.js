import React from "react";
import UserContext from "../../../context/userContext";

export default function UserList({searchWord}) {
  const { userList, selectUser } = React.useContext(UserContext);

  const filterdUserList = userList.filter((u) =>
    `${u.username}${u.first_name}${u.last_name}`
      .toLowerCase()
      .includes(searchWord.toLowerCase())
  );
  return (
    <div className="user-list">
      {filterdUserList.map((item) => {
        return (
          <>
            <div
              className="user-list__user"
              onClick={() => selectUser(item.id)}
            >
              <div className="user-list__image">
                <img src="https://via.placeholder.com/150" alt="noPhoto" />
              </div>

              <div className="user-list__rightconteiner">
                <div className="user-list__username">
                  <p>{`${item.first_name} ${item.last_name}`}</p>
                </div>

                <div className="user-list__lastmessage">
                  <p>
                    {item.messages[item.messages.length - 1].text.substring(
                      0,
                      20
                    ) + "......"}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
