import { Dispatch, useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';
import { OrderActions } from '../reducers/order-reducer';

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  // useCallback*
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  return (
    <>
      <div className="">
        <h2 className="font-semibold">Totales y propinas:</h2>
        <p>
          Subtotal a pagar:{' '}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:{' '}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{' '}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="bg-blue-700 px-4 py-2 text-center rounded-3xl text-white"
        onClick={() => dispatch({ type: 'place-order' })}
      >
        Finalizar Orden
      </button>
    </>
  );
}
