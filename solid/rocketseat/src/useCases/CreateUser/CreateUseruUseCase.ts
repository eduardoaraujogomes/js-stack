import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUsersRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{

  constructor(
    private usersRepository: IUsersRepository
  ){}

  async execute(data: ICreateUsersRequestDTO) {
    const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExits) {
      throw new Error('User already exists.')
    }
    const user = new User(data);

    await this.usersRepository.save(user);
  }
  
}