import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IndicatorData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  hora: number;

  @Column()
  dia: number;

  @Column()
  mes: number;

  @Column()
  uf: string;

  @Column()
  estado: string;

  @Column({ nullable: true })
  alo!: number;

  @Column({ nullable: true })
  cpc!: number;

  @Column({ nullable: true })
  cpca!: number;

  @Column({ nullable: true })
  pp!: number;

  @Column({ nullable: true })
  cliente_nao_esta!: number;

  @Column({ nullable: true })
  cliente_nao_validou!: number;

  @Column({ nullable: true })
  desconhece!: number;

  @Column({ nullable: true })
  desconhece_divida!: number;

  @Column({ nullable: true })
  falecido!: number;

  @Column({ nullable: true })
  fone_mudo!: number;

  @Column({ nullable: true })
  lig_perdida!: number;

  @Column({ nullable: true })
  preventivo!: number;

  @Column({ nullable: true })
  recado!: number;

  @Column({ nullable: true })
  alega!: number;

  @Column({ nullable: true })
  retorno_agendado!: number;

  @Column({ nullable: true })
  dados_invalidos!: number;

  @Column({ nullable: true })
  sem_interesse!: number;

  @Column({ nullable: true })
  nao_tabulada!: number;

  @Column({ nullable: true })
  retorno_indireto!: number;

  @Column({ nullable: true })
  fraude!: number;

  @Column({ nullable: true })
  ocupado!: number;

  @Column({ nullable: true })
  recept!: number;

  @Column({ nullable: true })
  processo_juridico!: number;

  @Column({ nullable: true })
  contestacao!: number;

  @Column()
  valor: string;

  @Column()
  tipo: string;

  @Column()
  produto: string;
}
