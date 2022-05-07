import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import post from './post'
import author from './author'
import project from './project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    project,
    post,
    category,
    author,
  ]),
})
