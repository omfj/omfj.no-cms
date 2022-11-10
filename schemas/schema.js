import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import externalLink from "./externalLink";

import category from "./category";
import author from "./author";
import project from "./project";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([project, category, author, externalLink]),
});
