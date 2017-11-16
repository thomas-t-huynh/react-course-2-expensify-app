import { login , logout } from '../../actions/auth';

test('should set up action login', () => {
    const userID = '123abc';
    const action = login(userID);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: userID
    });
});


test('should set up action logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});