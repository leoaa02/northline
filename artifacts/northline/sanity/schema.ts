import type { SchemaTypeDefinition } from 'sanity';
import { articleType } from './schemaTypes/articleType';
import { categoryType } from './schemaTypes/categoryType';
import { authorType } from './schemaTypes/authorType';

export const schema = {
  types: [articleType, categoryType, authorType] as SchemaTypeDefinition[],
};
