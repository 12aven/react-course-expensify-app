import { login, logout } from '../../actions/auth.js';

test('should generate the login action object', () => {
    const uid = 'abc123'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    });
});

test('should generate the logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});