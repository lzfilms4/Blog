import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors, ValidateProfileError } from 'entityes/Profile';

describe('getProfileValidateErrors.test', () => {
    test('should not return error', () => {
        const errors = [ValidateProfileError.NO_DATA];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
