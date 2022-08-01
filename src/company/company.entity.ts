import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("company")
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;
    @Column()
    adminId: string;


    // [Required]
    // [ForeignKey(nameof(IdentityUser.Id))]
    // public string AdminId { get; set; }
    }
