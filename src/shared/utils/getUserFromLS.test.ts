import {getUserFromLS} from "./getUserFromLS.ts";
import {STORAGE_KEYS} from "../constant";


describe('Getting user from localStorage using function getUserFromLS', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('Should return null when no user is stored in localStorage', () => {
        const result = getUserFromLS();
        expect(result).toBeNull();
    });

    it('Should return the parsed user object when a user is stored in localStorage', () => {
        const mockUser = {
            username: '1',
            password: '123456',
        };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUser));

        const result = getUserFromLS();
        expect(result).toEqual(mockUser);
    });

    it('Should handle invalid JSON in localStorage', () => {
        localStorage.setItem(STORAGE_KEYS.USER, 'invalid JSON');

        expect(() => {
            getUserFromLS();
        }).toThrow(SyntaxError);
    });
});