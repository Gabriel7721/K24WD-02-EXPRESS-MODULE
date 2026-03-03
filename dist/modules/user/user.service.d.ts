import type { UserDatabase } from "./user.database.js";
export declare class UserService {
    private readonly userDb;
    constructor(userDb: UserDatabase);
    list(): Promise<(import("./user.database.js").UserEntity | null)[]>;
}
//# sourceMappingURL=user.service.d.ts.map