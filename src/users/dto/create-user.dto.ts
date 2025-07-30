import { IsString, IsNotEmpty ,IsIn,MinLength, MaxLength} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username:string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(10)
    password:string

    @IsIn(['soldier', 'commander'])
    @IsNotEmpty()
    role: string;
}
