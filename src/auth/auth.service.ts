import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {JwtService} from '@nestjs/jwt'
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private jwtservice:JwtService
  ){}
  async login(body:any) {
    const passdb = await this.findOne(body.username)
    const pasTrue = await bcrypt.compare(body.password,passdb?.password)
    if(!passdb || !pasTrue){
      return 'error'
    }
    const payload = {sub:passdb.role,username:passdb.username}
    return await this.jwtservice.signAsync(payload)
  }

  async signing(token:string){
    try {
      const payload = await this.jwtservice.verifyAsync(token)
      return payload
    } catch (error) {
      return "err"
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOne(username:string) {
    return await User.findOneBy({'username':username})
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
