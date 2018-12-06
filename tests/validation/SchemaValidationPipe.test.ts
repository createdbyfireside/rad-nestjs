import { BadRequestException } from '@nestjs/common';
import { SchemaValidationPipe } from '../../src/validation/SchemaValidationPipe';
import { expect } from 'chai';
import * as Joi from 'joi';

describe('SchemaValidationPipe', () => {
   // eslint-disable-next-line @silvermine/silvermine/no-multiline-var-declarations
   const schema = Joi.object()
      .keys({
         username: Joi.string().required(),
      })
      .required();

   let pipe: SchemaValidationPipe;

   before(() => {
      pipe = new SchemaValidationPipe(schema);
   });

   describe('transform', () => {
      it('should throw a BadRequestException when there is a schema error', () => {
         let transform;

         transform = () => pipe.transform({});

         expect(transform).to.throw(BadRequestException);
      });

      it('should not throw a BadRequestException when the given object is valid', () => {
         const data = { username: 'user' };

         expect(pipe.transform(data)).to.strictlyEqual(data);
      });
   });
});
