export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProifleData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
