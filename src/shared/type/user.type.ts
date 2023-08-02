import {UserRole} from '@/shared/security/userRole';

export type UserType = {
    username: string,
    email: string,
    roles: UserRole[]
}