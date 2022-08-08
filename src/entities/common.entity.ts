import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

import { ObjectId } from '@mikro-orm/mongodb';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export abstract class CommonEntity {
  @ApiProperty()
  @PrimaryKey()
  _id!: ObjectId;

  @ApiProperty()
  @SerializedPrimaryKey()
  id!: string; // string variant of PK, will be handled automatically

  @ApiProperty()
  @Property()
  createdAt = new Date();

  @ApiProperty()
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
