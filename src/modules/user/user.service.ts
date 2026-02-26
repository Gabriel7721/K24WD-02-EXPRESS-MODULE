import type { UserDatabase } from "./user.database.js";

export class UserService {
  // Injection
  constructor(private readonly userDb: UserDatabase) {}

  async list(){
    return this.userDb.list()
  }
}
