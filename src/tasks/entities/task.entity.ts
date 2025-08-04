import {Column, PrimaryGeneratedColumn,Entity,BaseEntity} from 'typeorm'

@Entity('tasks')
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    mission:string
}
