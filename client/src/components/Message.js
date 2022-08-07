const Message = (props) => {
  const { user, message } = props;
  const { value, time } = message;
  const { userId, userName, isOwner } = user;

  const messagePositionStyle = !isOwner
    ? "flex justify-start"
    : "flex justify-end";

  const messageStyle = !isOwner
    ? "relative text-sm text-neutral-200 max-w-xl px-4 py-2 bg-neutral-800 rounded-r-md rounded-bl-md shadow"
    : "relative text-sm text-neutral-800 max-w-xl px-4 py-2 bg-neutral-200 rounded-l-md rounded-br-md shadow";

  return (
    <div className="relative w-full p-4 overflow-y-auto">
      <ul className="space-y-2">
        <li className={messagePositionStyle}>
          <div className={messageStyle}>
            <span className="block">{value}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Message;
