"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUserMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ValidateUserMiddleware = class ValidateUserMiddleware {
    use(req, res, next) {
        const { email, password } = req.body;
        if (!email ||
            typeof email !== 'string' ||
            !password ||
            typeof password !== 'string') {
            throw new common_1.BadRequestException('Please enter a valid username and password');
        }
        next();
    }
};
exports.ValidateUserMiddleware = ValidateUserMiddleware;
exports.ValidateUserMiddleware = ValidateUserMiddleware = __decorate([
    (0, common_1.Injectable)()
], ValidateUserMiddleware);
//# sourceMappingURL=validateUser.middleware.js.map