import {cookies} from 'next/headers';
import {UserType} from '@/shared/type/user.type';
import {importSPKI, jwtDecrypt, JWTPayload, jwtVerify, JWTVerifyResult} from 'jose';
import {decodeFromBase64} from 'next/dist/build/webpack/loaders/utils';
import {KeyObject} from 'crypto';
import {CryptoKey} from 'next/dist/compiled/@edge-runtime/primitives';
import {UserRole} from '@/shared/security/userRole';

export default async function getUser(): Promise<UserType|null> {
    const jwtToken = cookies().get('user_id');
    const key = process.env.JWT_PUBLIC_KEY!;
    const algo = "RS256";
    const encodedKey = await importSPKI(key, algo);

    if (!jwtToken) return null;

    let jwt: false|JWTVerifyResult = false;

    try {
        jwt = await jwtVerify(jwtToken.value, encodedKey);
    } catch (err) {
        return null;
    }

    return {
        email: jwt.payload.email as string,
        username: jwt.payload.username as string,
        roles: jwt.payload.roles as UserRole[]
    }
}