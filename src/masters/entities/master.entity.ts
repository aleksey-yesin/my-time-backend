import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';
import { Service } from 'src/services/entities/service.entity';

@Entity('masters')
export class Master {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'masters_pkey' })
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.masters)
  @JoinColumn({
    name: 'company_id',
    foreignKeyConstraintName: 'masters_company_id_fkey',
  })
  company?: Company;

  @RelationId((master: Master) => master.company)
  companyId: number;

  @ManyToMany(() => Service, (service) => service.masters)
  @JoinTable({
    name: 'masters_services',
    joinColumn: {
      name: 'master_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'masters_services_master_id_fkey',
    },
    inverseJoinColumn: {
      name: 'service_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'masters_services_service_id_fkey',
    },
  })
  services?: Service[];
}
