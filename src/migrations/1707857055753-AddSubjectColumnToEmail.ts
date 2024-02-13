import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddSubjectColumnToEmail1707857055753
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'emails',
      new TableColumn({
        name: 'subject',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('emails', 'subject');
  }
}
