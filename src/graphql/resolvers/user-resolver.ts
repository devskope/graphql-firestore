import Container from 'typedi';
import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';

import logger from '@config/logger';
import UserService from '@services/user-service';
import { User, CreateUserInput, QueryUserInput } from '@graphql/typedefs/user';

@Resolver(() => User)
export default class UserResolver {
  @Query(() => User)
  async user(@Args() args: QueryUserInput) {
    const { email } = args;
    const userService = Container.get(UserService);
    try {
      const user = await userService.getUser(email);
      return user;
    } catch (error) {
      logger('get error:: ', error);
    }
  }

  @Mutation(() => User)
  async createUser(@Arg('input') input: CreateUserInput) {
    const userService = Container.get(UserService);
    try {
      const user = await userService.createUser({ ...input });
      return user;
    } catch (error) {
      logger('creation error:: ', error);
    }
  }
}
