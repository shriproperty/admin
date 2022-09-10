import { useDispatch } from "react-redux";
import { TAppDispatch } from "../types/types";

export const useAppDispatch: () => TAppDispatch = useDispatch;
