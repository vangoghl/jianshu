import { INCRENENT, NEWFOUSED } from "./action-types";

export const increnment = number => ({ type: INCRENENT, data: number });

export const newfoused = bool => ({ type: NEWFOUSED, data: bool });
