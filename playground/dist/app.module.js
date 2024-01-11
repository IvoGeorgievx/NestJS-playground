"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const devtools_integration_1 = require("@nestjs/devtools-integration");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const validateUser_middleware_1 = require("./middlewares/validateUser.middleware");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const protected_routes_1 = require("./protected.routes");
const todo_module_1 = require("./todo/todo.module");
const graphql_module_1 = require("./graphql/graphql.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
        consumer.apply(validateUser_middleware_1.ValidateUserMiddleware).forRoutes({
            path: 'auth/login',
            method: common_1.RequestMethod.POST,
        });
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes(...protected_routes_1.protectedRoutes);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            devtools_integration_1.DevtoolsModule.register({
                http: process.env.NODE_ENV !== 'production',
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            todo_module_1.TodoModule,
            graphql_module_1.GraphqlModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map