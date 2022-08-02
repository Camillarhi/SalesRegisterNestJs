import { User } from "src/user/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("company")
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;
    @Column()
    adminId: string;
    @OneToOne(() => User)
    role: User;


    // [Required]
    // [ForeignKey(nameof(IdentityUser.Id))]
    // public string AdminId { get; set; }
}
