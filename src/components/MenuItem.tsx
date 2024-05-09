import { Dispatch } from 'react';
import type { MenuItem } from '../types';
import { OrderActions } from '../reducers/order-reducer';

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  const { name, price } = item;

  return (
    <button
      className="flex gap-2 rounded-2xl bg-white hover:bg-gray-300 w-full p-3 justify-between"
      onClick={() => dispatch({ type: 'add-item', payload: { item: item } })}
    >
      <p>{name}</p>
      <p className="font-semibold">${price}</p>
    </button>
  );
}
