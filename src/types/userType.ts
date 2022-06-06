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

// ---- User State Type stuff ----
export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

// ---- Action Type stuff ----
export enum UserActionTypes {
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
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

