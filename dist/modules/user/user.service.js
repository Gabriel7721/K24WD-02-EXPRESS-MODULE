export class UserService {
    userDb;
    // Injection
    constructor(userDb) {
        this.userDb = userDb;
    }
    async list() {
        return this.userDb.list();
    }
}
//# sourceMappingURL=user.service.js.map