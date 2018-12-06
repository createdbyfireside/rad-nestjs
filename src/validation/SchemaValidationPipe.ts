import * as Joi from 'joi';
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class SchemaValidationPipe implements PipeTransform {

   private readonly _schema: Joi.SchemaLike;

   public constructor(schema: Joi.SchemaLike) {
      this._schema = schema;
   }

   public transform(value: any): any {
      const { error } = Joi.validate(value, this._schema);

      if (error) {
         // TODO Better error message based on validation error
         throw new BadRequestException('Validation failed');
      }

      return value;
   }
}
