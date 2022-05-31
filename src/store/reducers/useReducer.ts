// const FETCH_USERS = "FETCH_USERS"
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
// const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

// interface FetchUsersAction {
//     type: typeof FETCH_USERS;
// }
// interface FetchUsersSuccessAction {
//     type: typeof FETCH_USERS_SUCCESS;
//     payload: any[]
// }
// interface FetchUsersErrorAction {
//     type: typeof FETCH_USERS_ERROR;
//     payload: string
// }


enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}
interface FetchUsersAction {
    type:  UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type:  UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}
interface FetchUsersErrorAction {
    type:  UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}
type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction


interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}
const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


export const useReducer = (state = initialState, action: UserAction): UserState => {
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