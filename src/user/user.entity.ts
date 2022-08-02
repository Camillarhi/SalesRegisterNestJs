import { Exclude } from "class-transformer";
import { Role } from "src/role/role.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    address: string;

    @Column()
    gender: string;

    @Column()
    dateOfBirth: Date;

    @Column({ nullable: true })
    profilePicture: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ nullable: true })
    staffId: string;

    @Column({ nullable: true })
    createdById: string;

    @Column({ nullable: true })
    companyName: string;

    @Column({ nullable: true })
    phoneNumber:string;

    @ManyToOne(() => Role)
    role: Role;
    
}