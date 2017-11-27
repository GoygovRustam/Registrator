import { Hl7Message } from "health-level-seven-parser";
import { COLLAPSE_ALL, SET_HL7_MESSAGE } from './actions';
import { debug } from "util";

export interface IAppState{
    hl7Message:Hl7Message;
}

export const INITIAL_STATE: IAppState = { hl7Message:null}

export function rootReducer(state:IAppState, action:any):IAppState{
    return state;
}

