/* eslint-disable typescript/no-namespace */

// TODO find a better way
declare module Chai {
   export interface Assertion {
      strictlyEqual(obj: any): Chai.Assertion;
   }
}
