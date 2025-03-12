// -------------------------- middleware static name
// -------------------------- make rout handler 
// -------------------------- make protected rout
// -------------------------- less traffic

import { NextRequest, NextResponse } from 'next/server';
// note deal with delete method only
// export function middleware(request: NextRequest && request.method === "DELETE"}) 

export function middleware(request: NextRequest) {

    const jwtToken = request.cookies.get("jwtToken");
    const token = jwtToken?.value as string;

    if (!token) {
        // nextUrl as req.url
        if (request.nextUrl.pathname.startsWith("/api/users/profile/")) {
            return NextResponse.json(
                { message: 'no token provided, access denied' },
                { status: 401 } // Unauthorized
            );
        }
    } else {
        // nextUrl as req.url
        if (
            request.nextUrl.pathname === "/login" ||
            request.nextUrl.pathname === "/register"
        ) {
            // redirect special to  NextResponse
            // new URL("/", request.url)
            return NextResponse.redirect(new URL("/", request.url)); // go to html page
        }
    }
}

// rout (path) that take middleware
export const config = {
    // matcher => call as matcher array
    // :path* all path after /api/users/profile/
    // check is here not http method as nodeJS
    matcher: ["/api/users/profile/:path*", "/login", "/register"]
}
