import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';
import { User } from 'src/users/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';

@Injectable()
export class ShiftService {
  async create(createShiftDto: CreateShiftDto) {
    const shift = new Shift()
    shift.start_time = createShiftDto.start_time
    shift.end_time = createShiftDto.end_time
    const user = await User.findOneBy({'id':createShiftDto.idUser})
    const task = await Task.findOneBy({'id':createShiftDto.idTask})
    if(!user) throw new Error('user not found')
    shift.user = user
    if(!task) throw new Error('task not found')
    shift.task = task
    return await shift.save()
  }

  findAll() {
    return `This action returns all shift`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shift`;
  }

  update(id: number, updateShiftDto: UpdateShiftDto) {
    return `This action updates a #${id} shift`;
  }

  remove(id: number) {
    return `This action removes a #${id} shift`;
  }
}
