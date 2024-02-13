import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateEmailTable1707853464217 } from 'src/migrations/1707853464217-CreateEmailTable';
import { AddSubjectColumnToEmail1707857055753 } from 'src/migrations/1707857055753-AddSubjectColumnToEmail';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateEmailTable1707853464217,
    AddSubjectColumnToEmail1707857055753,
  ],
});
