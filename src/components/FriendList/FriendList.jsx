import React from 'react';
import PropTypes from 'prop-types';
import { FriendList, FriendListItem } from './FriendList.styled';

export const FriendList = (friends) => {
    return (<FriendList>
        {friends.map(({avatar, name, isOnline, id}) =>
            <FriendListItem
                avatar={avatar}
                name={name}
                isOnline = {isOnline}
                key={id}
            >
        </FriendListItem>
       )}
    </FriendList>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};