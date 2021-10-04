import React from "react";

import  UserContext  from "../../../context/userContext";

export default function Messages() {
  const { selectedUser } = React.useContext(UserContext);

  return (
    <div className="messages">
      {selectedUser
        ? selectedUser.messages.map((message) => {
            return <div>{message.text}</div>;
          })
        : null}
    </div>
  );
}
