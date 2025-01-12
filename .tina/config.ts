import { defineConfig } from 'tinacms';

const footerCollection = {
    label: 'Footer',
    name: 'footer',
    path: 'content/global',
    format: 'json',
    match: {
      include: 'footer'
    },
    fields: [
      {
        type: 'string',
        label: 'Wave CTA Title',
        name: 'waveCtaTitle',
        required: true,
      },
      {
        type: 'object',
        label: 'Footer Items',
        name: 'footerItems',
        list: true,
        required: true,
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'object',
            label: 'Items',
            name: 'items',
            list: true,
            required: true,
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title',
                isTitle: true,
                required: true,
              },
              {
                type: 'string',
                label: 'Link',
                name: 'href',
                required: true,
              },
            ]
          },
        ]
      },
    ],
    ui: {
      allowedActions: {
        create: false,
        delete: false,
      },
    },
  }

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  process.env.NEXT_PUBLIC_EDIT_BRANCH ||
  'master';

function svgValidator(url: string): string | undefined {
  if (url && !url.endsWith(".svg")) {
    return "Should be an svg file"
  }
}


export default defineConfig({
  branch,
  token: process.env.TINA_TOKEN,
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
      footerCollection,
      {
        label: 'Home Page Hero',
        name: 'hero',
        path: 'content/homepage',
        format: 'json',
        match: {
          include: "hero"
        },
        fields: [
          {
            type: 'string',
            label: 'Over Title',
            name: 'overTitle',
          },
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
            isBody: true,
            required: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        label: 'Home Page CTA',
        name: 'cta',
        path: 'content/homepage',
        format: 'json',
        match: {
          include: "cta"
        },
        fields: [
          {
            type: 'string',
            label: 'Over Title',
            name: 'overTitle',
          },
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
            isBody: true,
            required: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        label: 'Partners',
        name: 'partners',
        path: 'content/partners',
        format: 'json',
        fields: [
          {
            type: 'image',
            label: 'Logo URL',
            name: 'logoUrl',
            required: true,
            ui: {
              validate: svgValidator
            }
          },
        ]
      },
      {
        label: 'Sections',
        name: 'section',
        path: 'content/sections',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Over Title',
            name: 'overTitle',
            required: true
          },
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            label: 'Content',
            name: 'content',
            isBody: true,
            required: true
          },
          {
            type: 'image',
            label: 'Image URL',
            name: 'imageUrl',
            required: true
          },
          {
            type: 'boolean',
            label: 'Reversed',
            name: 'reversed',
            required: true
          },
        ]
      },
      {
        label: 'Features Gallery',
        name: 'featuresGallery',
        path: 'content/featureGallery',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
            isBody: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Image URL',
            required: true,
            name: 'imageUrl',
          },
          {
            type: 'string',
            label: 'Base Color',
            name: 'baseColor',
            ui: {
              component: 'color',
              colorFormat: "rgb"
            },
            required: true,
          },
          {
            type: 'string',
            label: 'Second Color',
            name: 'secondColor',
            ui: {
              component: 'color',
              colorFormat: "rgb"
            },
            required: true,
          },
        ]
      },
      {
        label: 'Features',
        name: 'features',
        path: 'content/features',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
            isBody: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Image URL',
            name: 'imageUrl',
            required: true,
          },
        ]
      },
      {
        label: 'Testimonials',
        name: 'testimonials',
        path: 'content/testimonials',
        format: 'json',
        fields: [
          {
            type: 'object',
            label: 'author',
            name: 'author',
            required: true,
            fields: [
              {
                type: 'string',
                label: 'Name',
                name: 'name',
                isTitle: true,
                required: true,
              },
              {
                type: 'string',
                label: 'Title',
                name: 'title',
                required: true,
              },
              {
                type: 'image',
                label: 'Avatar URL',
                name: 'avatarUrl',
                required: true,
              },
            ]
          },
          {
            type: 'string',
            label: 'Content',
            name: 'content',
            isBody: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Company Logo URL',
            name: 'companyLogoUrl',
            required: true,
            ui: {
              validate: svgValidator
            }
          },
        ]
      },
      {
        label: 'Blog Posts',
        name: 'posts',
        path: 'content/posts',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
            required: true,
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
            required: true,
          },
          {
            type: 'rich-text',
            label: 'Blog Post Body',
            name: 'body',
            isBody: true,
            templates: [
              {
                name: 'Quote',
                label: 'Quote',
                fields: [
                  {
                    type: 'string',
                    name: 'content',
                    label: 'Content',
                  },
                  {
                    type: 'string',
                    name: 'author',
                    label: 'Author',
                    required: true,
                  },
                  {
                    type: 'string',
                    name: 'cite',
                    label: 'Cite',
                  },
                ],
              },
              {
                name: 'ArticleImage',
                label: 'ArticleImage',
                fields: [
                  {
                    type: 'string',
                    name: 'src',
                    label: 'Src',
                  },
                  {
                    type: 'string',
                    name: 'caption',
                    label: 'Caption',
                  },
                ],
              },
              {
                name: 'Code',
                label: 'Code',
                fields: [
                  {
                    type: 'string',
                    name: 'code',
                    label: 'Code',
                  },
                  {
                    type: 'string',
                    name: 'language',
                    label: 'Language',
                  },
                  {
                    type: 'string',
                    name: 'selectedLines',
                    label: 'Selected Lines',
                  },
                  {
                    type: 'boolean',
                    name: 'withCopyButton',
                    label: 'With Copy Button',
                  },
                  {
                    type: 'boolean',
                    name: 'withLineNumbers',
                    label: 'With Line Numbers',
                  },
                  {
                    type: 'string',
                    name: 'caption',
                    label: 'Caption',
                  },
                ],
              },
            ]
          }
        ],
      },
    ],
  }
});
