import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'User' })
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id!: string;

    @Column({ name: 'username' })
    @Field()
    username!: string;

    @Column({ name: 'email' })
    @Field()
    email!: string;

    @Column({ name: 'password' })
    @Field()
    password!: string;

    @Column({ name: "accountState" })
    @Field()
    accountState: string;

    @Column({ name: "profilePicture", nullable: true })
    @Field()
    profilePicture: string;

    @Column({ name: 'created_at' })
    @CreateDateColumn()
    createdAt!: Date;

    @Column({ name: 'updated_at' })
    @UpdateDateColumn()
    updatedAt!: Date;

}