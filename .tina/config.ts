import { defineConfig } from 'tinacms';

const branch =
  process.env.NEXT_PUBLIC_EDIT_BRANCH ||
  'master';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Blog Posts',
        name: 'posts',
        path: 'posts',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
          },
          {
            type: 'string',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'string',
            label: 'Tags',
            name: 'tags',
          },
          {
            type: 'image',
            label: 'Image URL',
            name: 'imageUrl',
          },
          {
            type: 'rich-text',
            label: 'Blog Post Body',
            name: 'body',
            isBody: true,
          }
        ],
      },
    ],
  }
});
