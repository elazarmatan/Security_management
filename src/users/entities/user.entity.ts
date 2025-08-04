import {Column, PrimaryGeneratedColumn,Entity,BaseEntity} from 'typeorm'

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username:string

    @Column()
    password:string

    @Column()
    role:string
}
