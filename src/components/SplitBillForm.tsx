import { useState } from 'react';
import { FriendType } from '../App';
import Button from './Button';

type SplitBillFormComponentProps = {
  selectedFriend: FriendType;
  onSplitBill: (value: number) => void;
};

export default function SplitBillForm({
  selectedFriend,
  onSplitBill,
}: SplitBillFormComponentProps) {
  const [bill, setBill] = useState<string>('');
  const [paidByUser, setPaidByUser] = useState<string>('');
  const paidByFriend = bill ? +bill - +paidByUser : undefined;
  const [whoIsPaying, setWhoIsPaying] = useState<string>('user');

  const { name } = selectedFriend;

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!bill || !paidByUser || !whoIsPaying) return;
    onSplitBill(
      whoIsPaying === 'user' ? (paidByFriend as number) : -Number(paidByUser)
    );
  };

  return (
    <form className='form-split-bill' onSubmit={handelSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💲Bill Value</label>
      <input
        type='text'
        value={bill}
        onChange={(event) => setBill(event.target.value)}
      />

      <label>🧑‍🦱Your expense</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(event) => {
          const value = event.target.value;
          bill && +value > +bill
            ? setPaidByUser(paidByUser)
            : setPaidByUser(value);
        }}
      />

      <label>🧑‍🤝‍🧑{name}'s expense</label>
      <input type='text' defaultValue={paidByFriend} disabled />

      <label>🤑who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{name}</option>
      </select>

      <Button type='submit'>Split Bill</Button>
    </form>
  );
}
