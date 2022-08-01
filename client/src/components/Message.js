const Message = (props) => {
  const { user, message } = props;
  const { value, time } = message;
  const { userId, userName, isOwner } = user;

  const nameStyle = !isOwner
    ? "flex flex-row space-x-2"
    : "flex flex-row-reverse space-x-2 space-x-reverse";

  return (
    <div className="p-2 justify-end">
      <div className="w-full flex flex-col">
        <div className={nameStyle}>
          <p className="text-neutral-200 font-bold text-sm">{userName}</p>
          <p className="text-neutral-500 font-light text-sm">{time}</p>
        </div>
        <div clasName="flex flex-col">
          <p className="text-sm w-fit text-white bg-neutral-800 p-2 rounded-r-md rounded-bl-md">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
