import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../types/types";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
