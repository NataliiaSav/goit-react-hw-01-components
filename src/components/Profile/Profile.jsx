import React from 'react';
import PropTypes from 'prop-types';
import { ProfileCard, Description, UserAvatar, UserName, UserTag, Location, UserStats, StatsItem, Label, Quantity } from './Profile.styled';



export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<ProfileCard>
  <Description>
    <UserAvatar src={avatar} alt="User avatar" />
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
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};