export class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    list = async (_req, res) => {
        const users = await this.userService.list();
        res.json({ data: users });
    };
}
//# sourceMappingURL=user.controller.js.map