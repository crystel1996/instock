import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'UserCodeValidation' })
@ObjectType()
export class UserCodeValidation {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id!: string;

    @Column({ name: 'code' })
    @Field()
    code!: string;

    @Column({ name: 'idUser' })
    @Field({  nullable: true})
    idUser: string;

    @Column({ name: 'email' })
    @Field()
    email!: string;

    @Column({ name: 'expiredAt' })
    @Field()
    expiredAt!: Date;

    @Column({ name: 'type' })
    @Field()
    type: string;

    @Column({ name: 'created_at' })
    @CreateDateColumn()
    createdAt!: Date;

    @Column({ name: 'updated_at' })
    @UpdateDateColumn()
    updatedAt!: Date;

}