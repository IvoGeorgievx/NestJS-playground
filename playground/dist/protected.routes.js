"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoutes = void 0;
const common_1 = require("@nestjs/common");
exports.protectedRoutes = [
    {
        path: '/users/me',
        method: common_1.RequestMethod.ALL,
    },
    {
        path: '/todos/create',
        method: common_1.RequestMethod.POST,
    },
    {
        path: 'todos/:id',
        method: common_1.RequestMethod.PUT,
    },
];
//# sourceMappingURL=protected.routes.js.map