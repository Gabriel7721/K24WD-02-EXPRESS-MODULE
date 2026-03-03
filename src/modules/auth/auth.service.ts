import { hashPassword } from "../../utils/crypto.js";
import { ApiError } from "../../utils/http.js";
import type { UserDatabase, UserEntity } from "./auth.database.js";
import type { UserRole } from "./auth.model.js";

export class UserService {
  // Injection
  constructor(private readonly userDb: UserDatabase) {}

  async list() {
    return this.userDb.list();
  }

  async register(input: {
    email: string;
    password: string;
    role?: UserRole;
  }): Promise<UserEntity | null> {
    const email = input.email.trim().toLowerCase();
    if (!email.includes("@"))
      throw new ApiError(400, { message: "Email must be included @" });

    const password = input.password;
    if (password.length < 6)
      throw new ApiError(400, {
        message: "Password must be higher than 6 characters",
      });
    // NOTE: BTVN người dùng phải nhập 1 ký tự đặt biệt
    // NOTE: BTVN người dùng phải viết hoa 1 chữ cái
    const existed = await this.userDb.findByEmail(email);

    // NOTE: BTVN Bắt lỗi email tồn tại rồi thông qua existed

    const now = new Date();
    const hashPwd = await hashPassword(password);
    const role: UserRole = input.role || "customer";

    return this.userDb.create({
      email,
      passwordHash: hashPwd,
      role,
      createdAt: now,
      updatedAt: now,
    });
  }
}
