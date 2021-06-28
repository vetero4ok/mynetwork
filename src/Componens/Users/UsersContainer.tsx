import {connect} from 'react-redux';
import {AppDispatch, AppStateType} from '../../Redux/Redux-Store';
import Users from './UsersOnClass';
import {followAC, setUsersAC, unfollowAC, userType} from '../../Redux/usersPageReducer';


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)