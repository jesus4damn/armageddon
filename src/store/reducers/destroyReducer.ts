import { ADD_TO_DESTROY, REMOVE_FROM_DESTROY } from "../../constants/types/actionTypes"
import {IDestroy} from "../../constants/types/stateInterfaces"
import {DestroyActions} from "../../constants/types/types"

const initialState: IDestroy = {
    list: []
}

export default function destroyReducer(
    state=initialState,
    action: DestroyActions
): IDestroy {
    switch (action.type) {
        case ADD_TO_DESTROY:
            return {...state, list: [...state.list, action.meteor]}
        case REMOVE_FROM_DESTROY:
            return {...state, list: state.list.filter((meteor) => meteor.id !== action.id)}
        default:
            return state
    }
}
