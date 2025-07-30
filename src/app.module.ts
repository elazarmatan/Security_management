import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [UsersModule, AuthModule,TypeOrmModule.forRoot({
    url:'mysql://root@localhost:3306/security_manager',
    type:'mysql',
    database:'security_manager',
    entities:[User],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
