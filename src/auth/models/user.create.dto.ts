import { IsEmail, IsNotEmpty } from "class-validator";

export class UserCreateDTO {
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    confirmPassword:string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
}