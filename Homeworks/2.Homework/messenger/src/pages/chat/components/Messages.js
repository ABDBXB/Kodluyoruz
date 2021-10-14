import React from "react";

import  UserContext  from "../../../context/userContext";

export default function Messages() {
  const { user,selectedUser} = React.useContext(UserContext);

  return (
    <div className="messages">
      {selectedUser
        ? selectedUser.messages.map((message) => {
            return <div className={`messages__sended ${message.sender === user.id ? "from-me":"" }`}>{message.text}</div>;
          })
        : null}
    </div>
  );
}
