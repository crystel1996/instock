import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserInput } from "src/dto/User/createUser.input";
import { User } from "src/model/User/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    createUser(createUserData: CreateUserInput) {
        const newUser = this.userRepository.create(createUserData);
        return this.userRepository.save(newUser);
    }

}