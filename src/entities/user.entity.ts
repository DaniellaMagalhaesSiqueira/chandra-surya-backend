import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'isadmin', type: 'bool'})
    isAdmin?: boolean;
   
    @Column({ name: 'name_user', type: 'varchar', length: 100 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password?: string;

    @Column({ name: 'cpf', type: 'varchar', length: 14 })
    cpf?: string;


    @Column({ name: 'birthdate', type: 'date' })
    birthDate?: Date | string;
}