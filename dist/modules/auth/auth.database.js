import { ObjectId } from "mongodb";
import { getDb } from "../../database/mongo.js";
export class AuthDatabase {
    col() {
        return getDb().collection("refresh_tokens");
    }
    async insert(doc) {
        const res = await this.col().insertOne(doc);
        return { ...doc, _id: res.insertedId };
    }
}
//# sourceMappingURL=auth.database.js.map