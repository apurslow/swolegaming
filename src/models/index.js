// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MapRotation } = initSchema(schema);

export {
  MapRotation
};