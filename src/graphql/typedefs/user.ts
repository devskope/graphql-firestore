import { ArgsType, Field, ID, InputType, ObjectType } from 'type-graphql';
import { IsEmail, MaxLength } from 'class-validator';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;
}

@ArgsType()
export class QueryUserInput {
  @Field()
  @IsEmail()
  @MaxLength(30)
  email: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  username: string;

  @Field()
  @IsEmail()
  @MaxLength(30)
  email: string;
}
