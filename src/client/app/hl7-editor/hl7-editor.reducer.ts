import { IAppState } from "../store";
import { COLLAPSE_ALL, SET_HL7_MESSAGE, EXPAND_ALL} from "./hl7-editor.actions";

export function hl7EditorReducer(state:IAppState, action:any):IAppState{
    switch(action.type){
        case COLLAPSE_ALL:
        return Object.assign({}, state, toggleChildren(state.hl7Message.children, false));

        case EXPAND_ALL:
        return Object.assign({}, state, toggleChildren(state.hl7Message.children, true));
        
        case SET_HL7_MESSAGE:
        return Object.assign({}, state, {
            hl7Message:action.hl7Message 
        });
    }
    return state;
}

function toggleChildren(children:any[], expand:boolean){
    if(!children) return;

    return children.map(child => {
      child.expanded = expand;
      toggleChildren(child.children, expand);
    });
}