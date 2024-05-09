import { useReducer } from 'react';
import { menuItems } from './data/db';
import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipsPercentangeForm from './components/TipsPercentangeForm';
import { OrderReducer, initialState } from './reducers/order-reducer';

function App() {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  return (
    <>
      <header className="bg-blue-700 py-4">
        <h1 className="font-medium text-3xl text-white text-center">
          Calculadora de Propinas
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 gap-x-4 gap-y-4">
        <div className="bg-gray-200 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Menú</h2>

          <div className="space-y-3 mt-4 mb-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4 space-y-10">
          {state.order.length ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipsPercentangeForm dispatch={dispatch} tip={state.tip} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <div className="py-4 bg-white mt-4">
              <p className="font-medium text-center">No hay ordenes</p>
              <p className="font-semibold text-center text-blue-700">
                Prueba a añadir algún producto del menú
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
