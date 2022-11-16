import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { User, UserInput } from "../entities/User";
import datasource from "../utils";
import { hash } from "argon2";

@Resolver()
export class UsersResolver {
  @Mutation(() => User)
  async createUser(
    @Arg("data", () => UserInput) data: UserInput
  ): Promise<User> {
    data.password = await hash(data.password);
    return await datasource.getRepository(User).save(data);
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await datasource.getRepository(User).find({});
  }
}
