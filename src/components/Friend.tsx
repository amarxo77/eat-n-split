import { FC } from 'react';
import { FriendType } from '../App';
import Button from './Button';

const Friend: FC<{
  friend: FriendType;
  selectFriend: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}> = ({ friend, selectFriend, selectedFriend }) => {
  const { balance, image, name, id } = friend;
  const isSelected: boolean = id === selectedFriend?.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 ? (
        <p className='red'>
          You owe {name} {Math.abs(balance)}$
        </p>
      ) : balance > 0 ? (
        <p className='green'>
          {name} owes you {balance}$.
        </p>
      ) : (
        <p>You and {name} are even.</p>
      )}
      <Button type='button' onClick={() => selectFriend(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;
