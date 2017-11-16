import authReducer from '../../reducers/auth';

test('should activate login', () => {
    
    const defaultState = {};
    const userID = '123abc';
    const action = {
        type: 'LOGIN',
        uid: userID
    };
    const state = authReducer( defaultState,  action );
    expect(state.uid).toEqual(action.uid);
});

test('should activate logout', () => {
    
    const defaultState = {
        uid: '123abc'
    };
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer( defaultState,  action );
    expect(state).toEqual({});
});