import cookieParser from "cookie-parser";
import express from "express";
import { userRoutes } from "./modules/user/user.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
export function createApp() {
    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use("/api/users", userRoutes);
    app.use(errorMiddleware);
    return app;
}
//# sourceMappingURL=app.js.map