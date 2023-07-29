import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, } from 'typeorm'

@Entity("products")
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description?: string

    @Column()
    imagePath?: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updatedAt: String
}