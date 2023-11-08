import { useState } from 'react';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import SplitBillForm from './components/SplitBillForm';

export type FriendType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

const initialFriends: FriendType[] = [
  {
    id: '118836',
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: '933372',
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: '499476',
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState<FriendType[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(null);

  const addFriend = (friend: FriendType) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddFriend(false);
  };

  function toggleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function selectFriend(friend: FriendType) {
    if (selectedFriend?.id === friend.id) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
    }
    setShowAddFriend(false);
  }

  function handelSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <main className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          selectFriend={selectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm addFriend={addFriend} />}
        <Button type='button' onClick={toggleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handelSplitBill}
        />
      )}
    </main>
  );
}
