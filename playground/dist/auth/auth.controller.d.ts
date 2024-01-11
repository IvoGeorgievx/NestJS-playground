import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<{
        token: string;
    }>;
    login(dto: AuthDto): Promise<{
        token: string;
    }>;
}
