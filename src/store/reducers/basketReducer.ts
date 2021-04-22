import {IBasket} from "../../constants/types/stateInterfaces"
import {BasketActions} from "../../constants/types/types"

const initialState: IBasket = {
    list: []
}

export default function basketReducer(
    state=initialState,
    action: BasketActions
): IBasket {

    switch (action.type) {
        default:
            return state
    }
}
