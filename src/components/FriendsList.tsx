import { FC } from 'react';
import { FriendType } from '../App';
import Friend from './Friend';

type FriendsListComponentProps = {
  friends: FriendType[];
  selectedFriend: FriendType | null;
  selectFriend: (friend: FriendType) => void;
};

const FriendsList: FC<FriendsListComponentProps> = ({
  friends,
  selectFriend,
  selectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectFriend={selectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
