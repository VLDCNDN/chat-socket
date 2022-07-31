const User = (props) => {
  return (
    <li class="text-white hover:bg-neutral-800 first:pt-0 last:pb-0">
      <a href="/" class="flex justify-between items-center w-full p-4">
        <p>{props.userName}</p>
        <div class="h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400"></div>
      </a>
    </li>
  );
};

export default User;
