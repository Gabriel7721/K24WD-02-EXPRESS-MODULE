import { ObjectId } from "mongodb";
import { getDb } from "../../database/mongo.js";
import type { UserDoc } from "./auth.model.js";

export type UserEntity = UserDoc & { _id: ObjectId };

export class UserDatabase {
  private col() {
    return getDb().collection<UserDoc>("users");
  }
}
