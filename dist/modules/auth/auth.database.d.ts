import { ObjectId } from "mongodb";
import type { UserDoc } from "./auth.model.js";
export type UserEntity = UserDoc & {
    _id: ObjectId;
};
export declare class UserDatabase {
    private col;
}
//# sourceMappingURL=auth.database.d.ts.map