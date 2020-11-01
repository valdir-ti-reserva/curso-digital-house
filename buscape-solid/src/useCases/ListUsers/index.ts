import { MysqlProvider } from "../../repositories/implementations/MySqlProvider";
import { ListUsersCase } from "./ListUsersCase";
import { ListUserController } from "./ListUserController";

const mysqlProvider = new MysqlProvider();
const listUserCase = new ListUsersCase(mysqlProvider);
const listUserController = new ListUserController(listUserCase);

export { listUserController };
