import PropTypes from "prop-types";
import style from "../friendlist/friendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={style.friend__list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={style.friends__item} key={id}>
          <span className={isOnline ? style.online : style.offline}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="40" />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
