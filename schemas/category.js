export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'emoji',
      title: 'Emoji',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      options: {
        disableAlpha: true,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      emoji: 'emoji',
    },
    prepare(selection) {
      const {title, emoji} = selection;
      return {
        title: `${emoji ?? ""} ${title}`,
      }
    },
  }
}
