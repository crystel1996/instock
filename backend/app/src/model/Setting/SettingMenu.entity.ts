import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'SettingMenu' })
@ObjectType()
export class SettingMenu {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id!: string;

    @Column({ name: 'code' })
    @Field()
    code!: string;

    @Column({ name: 'label' })
    @Field()
    label!: string;

    @Column({ name: 'url' })
    @Field()
    url!: string;

    @Column({ name: 'icon' })
    @Field()
    icon: string;

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