import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ user }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt={user.username} className={css.avatar} />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.tag}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span class="label">Followers</span>
          <span class="quantity">{user.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span class="label">Views</span>
          <span class="quantity">{user.stats.views}</span>
        </li>
        <li className={css.item}>
          <span class="label">Likes</span>
          <span class="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
