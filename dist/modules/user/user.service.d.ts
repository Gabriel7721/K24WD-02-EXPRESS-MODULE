import type { UserDatabase, UserEntity } from "./user.database.js";
import type { UserRole } from "./user.model.js";
export declare class UserService {
    private readonly userDb;
    constructor(userDb: UserDatabase);
    list(): Promise<(UserEntity | null)[]>;
    register(input: {
        email: string;
        password: string;
        role?: UserRole;
    }): Promise<UserEntity | null>;
}
//# sourceMappingURL=user.service.d.ts.map