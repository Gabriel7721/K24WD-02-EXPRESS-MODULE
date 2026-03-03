import { ObjectId } from "mongodb";
import { getDb } from "../../database/mongo.js";
export class UserDatabase {
    col() {
        return getDb().collection("users");
    }
}
//# sourceMappingURL=auth.database.js.map