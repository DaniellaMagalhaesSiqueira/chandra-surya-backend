import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'consultations'})
export class ConsultationEntity{
    @PrimaryGeneratedColumn()
    id?: string;

    @Column({name: 'professional', type: 'varchar', length:100 })
    professional?: string;

    @Column({name: 'imageurl', type: 'varchar', length: 255})
    imageUrl?: string;

    @Column({name: 'description', type: 'varchar', length: 255})
    description?: string;

    @Column({name: 'theme', type: 'varchar', length: 100})
    theme?: string;

    @Column({name: 'contact', type: 'varchar', length: 255 })
    contact?: string;

    @Column({ name: 'price', type: "float"})
    price?: number | null;
}