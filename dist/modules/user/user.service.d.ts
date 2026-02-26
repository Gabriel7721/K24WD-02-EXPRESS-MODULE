import type { UserDatabase } from "./user.database.js";
export declare class UserService {
    private readonly userDb;
    constructor(userDb: UserDatabase);
    list(): Promise<(import("./user.model.js").UserDoc & {
        _id: import("bson").ObjectId;
    })[]>;
}
//# sourceMappingURL=user.service.d.ts.map