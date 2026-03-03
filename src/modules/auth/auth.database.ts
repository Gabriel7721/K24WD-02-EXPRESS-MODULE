import { ObjectId } from "mongodb";
import { getDb } from "../../database/mongo.js";
import type { RefreshTokenDoc } from "./auth.model.js";

export type RefreshTokenEntity = RefreshTokenDoc & { _id: ObjectId };

export class AuthDatabase {
  private col() {
    return getDb().collection<RefreshTokenDoc>("refresh_tokens");
  }

  async insert(doc: RefreshTokenDoc): Promise<RefreshTokenEntity> {
    const res = await this.col().insertOne(doc);
    return { ...doc, _id: res.insertedId };
  }
}
