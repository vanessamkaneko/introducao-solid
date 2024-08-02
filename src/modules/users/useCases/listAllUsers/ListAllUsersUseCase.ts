import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IListAllUsers {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IListAllUsers): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User doesn't exist!");
    }

    if (!userExists.admin) {
      throw new Error("User is not an admin");
    }

    const listUsers = this.usersRepository.list();

    return listUsers;
  }
}

export { ListAllUsersUseCase };
