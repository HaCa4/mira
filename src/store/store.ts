import { proxy } from "valtio";
import { IOrderDetailsResult } from "@/utilities/types/dbTypes";

export const state = proxy({ details: {} as IOrderDetailsResult, setDetails: (details: IOrderDetailsResult) => (state.details = details) });
