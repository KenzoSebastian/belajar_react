import { createContext, useContext, useReducer } from "react";

export const TotalPriceContext = createContext(null); // bisa dikosongkan juga

export const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        total: action.payload.total,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  )
};

// Custom hook (harus nya di pisah)
// export const useTotalPrice = () => {
//   const context = useContext(TotalPriceContext);
//   if (context === undefined) {
//     throw new Error("useTotalPrice must be used within a TotalPriceProvider");
//   }
//   return context;
// };

// export const useTotalPriceDispatch = () => {
//   const context = useContext(TotalPriceDispatchContext);
//   if (context === undefined) {
//     throw new Error(
//       "useTotalPriceDispatch must be used within a TotalPriceProvider"
//     );
//   }
//   return context;
// };