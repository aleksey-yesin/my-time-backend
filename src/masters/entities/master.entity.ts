import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

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
}
