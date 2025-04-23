import { PartialType } from '@nestjs/mapped-types';
import { CreatePolloptionDto } from './create-polloption.dto';

export class UpdatePolloptionDto extends PartialType(CreatePolloptionDto) {}
