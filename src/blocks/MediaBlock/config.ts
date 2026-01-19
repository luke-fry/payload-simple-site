import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'mediaWidth', // required
      type: 'select', // required
      required: true,
      options: [
        {
          label: 'Contained',
          value: 'contained',
        },
        {
          label: 'Full Width',
          value: 'full_width',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
