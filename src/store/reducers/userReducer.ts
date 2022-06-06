import { UserAction, UserActionTypes, UserState } from "../../types/userType"

// ---- Reducer ----
const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}
// можно было хук не создавать. Просто параметру state в useSelector задать тип RootState

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                users: [],
                loading: true,
                error: null
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}