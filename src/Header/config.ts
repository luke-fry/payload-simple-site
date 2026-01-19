import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
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
              name: 'primaryNavigationLogo', // required
              label: 'Logo',              // optional
              type: 'upload', // required
              relationTo: 'media', // required
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'primaryNavigationItems',
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
                  RowLabel: '@/Header/RowLabel#RowLabel',
                },
              },
            },
          ],
          label: 'Navigation',
        },
      ]
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
