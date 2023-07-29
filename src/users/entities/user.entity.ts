import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Unique, } from 'typeorm'

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updatedAt: String
}