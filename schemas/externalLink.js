export default {
  name: 'externalLink',
  title: 'External Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
    },
  },
}
