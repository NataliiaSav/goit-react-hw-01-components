import React from 'react';
import PropTypes from 'prop-types';
import { ListOfFriends} from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (<ListOfFriends>
        {friends.map(({avatar, name, isOnline, id}) =>
            <FriendListItem
                avatar={avatar}
                name={name}
                isOnline = {isOnline}
                key={id}
            >
        </FriendListItem>
       )}
    </ListOfFriends>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ).isRequired,
};