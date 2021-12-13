export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li class="item">
        <span class="status"></span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
      </li>
    </>
  );
};
