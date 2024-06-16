import { IsString, IsEmail , IsEnum , IsNotEmpty } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'],{
        message: 'Role must be INTERN, ENGINEER or ADMIN'
    })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}