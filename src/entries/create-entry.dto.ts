import { IsString } from 'class-validator';

export class CreateEntryDto {
  @IsString() readonly title: string;
  @IsString() readonly body: string;
  @IsString() readonly authorId: string;
  @IsString() readonly categoryId: string;
  @IsString() readonly tags: string;
}