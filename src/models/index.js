// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Note } = initSchema(schema);

export {
  Post,
  Note
};