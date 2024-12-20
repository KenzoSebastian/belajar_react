import { useContext } from "react";
import {
  TotalPriceContext,
  TotalPriceDispatchContext,
} from "../context/TotalPriceContext";

export const useTotalPriceCart = () => [
  useContext(TotalPriceContext),
  useContext(TotalPriceDispatchContext),
];
