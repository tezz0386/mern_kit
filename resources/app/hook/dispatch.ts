import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store"; // Import the type from store.ts

export const useAppDispatch: () => AppDispatch = useDispatch;