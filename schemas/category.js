export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'colorPicker',
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
}
