import jwt from 'jsonwebtoken';
import { JWTPayload } from './types';
// serialize fun in  cookie
import { serialize } from 'cookie';

// Genereate JWT Token
export function generateJWT(jwtPayload: JWTPayload): string {
    const privateKey = process.env.JWT_SECRET as string;

    const token = jwt.sign(jwtPayload, privateKey, {
        expiresIn: '30d'
    });

    return token;
}

// Set Cookie with JWT
export function setCookie(jwtPayload: JWTPayload): string {
    const token = generateJWT(jwtPayload);
    // serialize(key , value , {options})
    const cookie = serialize("jwtToken", token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', // development=http, production= https
        sameSite: 'strict', // secure to cookie
        path: '/', // all page will take it 
        maxAge: 60 * 60 * 24 * 30, // 30 days  take by sec
    });

    return cookie;
}