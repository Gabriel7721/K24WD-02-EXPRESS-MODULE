import type { ObjectId } from "mongodb";
import type { UserDoc } from "./user.model.js";
export declare class UserDatabase {
    private col;
    list(): Promise<Array<UserDoc & {
        _id: ObjectId;
    }>>;
}
//# sourceMappingURL=user.database.d.ts.map