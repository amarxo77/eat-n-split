import { useState } from 'react';
import Button from './Button';
import { FriendType } from '../App';

type AddFriendProps = {
  addFriend: (friend: FriendType) => void;
};

export default function AddFriendForm({ addFriend }: AddFriendProps) {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('https://i.pravatar.cc/48');

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend: FriendType = {
      balance: 0,
      name,
      image: `${image}?=${id}`,
      id,
    };
    addFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className='form-add-friend' onSubmit={handelSubmit}>
      <label>😎friend name</label>
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <Button type='submit'>Add</Button>
    </form>
  );
}
