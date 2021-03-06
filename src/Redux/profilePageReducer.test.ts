import {v1} from 'uuid';
import {
    addPostCallbackAC,
    profilePageReducer,
    ProfileStateType,
    setStatusProfile,
    setUserProfile,
    UserProfileType
} from './profilePageReducer';

let startState: ProfileStateType
//type StartStateType = typeof startState
beforeEach(() => {

    startState = {
        myPostsData: [
            {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
            {id: v1(), massage: 'It is my first post!', likesCounts: 15},
            {id: v1(), massage: 'hey!', likesCounts: 1},
        ],
        profile: null,
        profileStatus:'',
    }
})

test('correct post should be added to up wall', () => {

    const state = profilePageReducer(startState, addPostCallbackAC('new post'))

    expect(state.myPostsData[0].massage).toBe('new post')
    expect(state.myPostsData[0].id).toBeDefined()
    expect(state.myPostsData.length).toBe(4)

})

test('profile should be installed', () => {
    const user: UserProfileType = {
        aboutMe: 'hi I am Igor',
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'FrontEnd',
        fullName: 'Bob',
        contacts: {
            github: 'string',
            vk: 'string',
            facebook: 'string',
            instagram: 'string',
            twitter: 'string',
            website: 'string',
            youtube: 'string',
            mainLink: 'string',
        },
        photos: {
            small: 'string',
            large: 'string',
        }
    }
    const state = profilePageReducer(startState, setUserProfile(user))

    expect(state.profile).toEqual({
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'FrontEnd',
        fullName: 'Bob',
        contacts: {
            github: 'string',
            vk: 'string',
            facebook: 'string',
            instagram: 'string',
            twitter: 'string',
            website: 'string',
            youtube: 'string',
            mainLink: 'string',
        },
        photos: {
            small: 'string',
            large: 'string',
        }
    })
})
test('input text to be update profileStatus', () => {

    const state = profilePageReducer(startState, setStatusProfile('new STATUS'))

    expect(state.profileStatus).toBe('new STATUS')
})