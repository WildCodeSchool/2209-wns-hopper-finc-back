import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Member, MemberInput } from '../entities/Member';
import datasource from '../utils';
import { hash } from 'argon2';

@Resolver()
export class MembersResolver {
  @Mutation(() => Member)
  async createMember(@Arg('data') data: MemberInput): Promise<Member> {
    return await datasource.getRepository(Member).save(data);
  }

  @Mutation(() => Member, { nullable: true })
  async deleteMember(@Arg('id', () => ID) id: number): Promise<Member | null> {
    const member = await datasource
      .getRepository(Member)
      .findOne({ where: { id } });

    if (member === null) {
      return null;
    }

    return await datasource.getRepository(Member).remove(member);
  }
}
