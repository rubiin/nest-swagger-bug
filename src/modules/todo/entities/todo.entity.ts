import { Entity } from '@mikro-orm/core';
import { CommonEntity } from 'src/entities/common.entity';

@Entity()
export class Todo extends CommonEntity {}
