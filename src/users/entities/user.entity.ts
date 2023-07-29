import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, } from 'typeorm'

@Entity("users")
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: number

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updatedAt: String
}