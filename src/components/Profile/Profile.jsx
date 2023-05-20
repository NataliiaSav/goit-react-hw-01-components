import PropTypes from 'prop-types';



export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<ProfileCard>
  <Description>
    <UserAvatar alt="User avatar">{avatar}</UserAvatar>
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <Location>{location}</Location>
  </Description>

  <UserStats>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </UserStats>
</ProfileCard>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  plocation: PropTypes.string.isRequired,
  aavatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};