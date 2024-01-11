import { RequestMethod } from '@nestjs/common';

export const protectedRoutes = [
    {
        path: '/users/me',
        method: RequestMethod.ALL,
    },
    {
        path: '/todos/create',
        method: RequestMethod.POST,
    },
    {
        path: 'todos/:id',
        method: RequestMethod.PUT,
    },
];
