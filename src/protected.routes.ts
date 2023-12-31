import { RequestMethod } from '@nestjs/common';

export const protectedRoutes = [
    {
        path: '/users/me',
        method: RequestMethod.ALL,
    },
];
