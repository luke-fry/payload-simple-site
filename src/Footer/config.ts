import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'footerLogo',   // required
              type: 'upload',       // required
              relationTo: 'media',  // required
              required: true,
            },
            {
              name: 'footerBlurb',  // required
              type: 'textarea',     // required
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'footerPrimaryItems',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
              maxRows: 6,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
            },
          ],
          label: 'Footer Menu - Primary',
        },
        {
          fields: [
            {
              name: 'footerServicesItems',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
              maxRows: 6,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
            },
          ],
          label: 'Footer Menu - Services',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
