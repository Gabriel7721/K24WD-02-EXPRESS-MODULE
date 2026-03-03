import { ObjectId } from "mongodb";
import type { RefreshTokenDoc } from "./auth.model.js";
export type RefreshTokenEntity = RefreshTokenDoc & {
    _id: ObjectId;
};
export declare class AuthDatabase {
    private col;
    insert(doc: RefreshTokenDoc): Promise<RefreshTokenEntity>;
}
//# sourceMappingURL=auth.database.d.ts.map