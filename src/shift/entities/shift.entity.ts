import{Entity,BaseEntity,ManyToOne,Column,JoinColumn,PrimaryGeneratedColumn} from 'typeorm'
import { Task } from 'src/tasks/entities/task.entity'
import { User } from 'src/users/entities/user.entity'

@Entity('shift')
export class Shift extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    start_time:Date

    @Column()
    end_time:Date

    @ManyToOne(() => User)
    @JoinColumn({name:"userId"})
    user:User

    @ManyToOne(() => Task)
    @JoinColumn({name:"taskId"})
    task:Task
}
