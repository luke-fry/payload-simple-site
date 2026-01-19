import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
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
              name: 'company_email', // required
              type: 'email', // required
              label: 'Email',
              required: true,
            },
            {
              name: 'company_phone', // required
              type: 'text', // required
              label: 'Phone',
              required: true,
            },
          ],
          label: 'Company Info',
        },
        {
          fields: [
            link({
              appearances: false,
              disableLabel: true,
              overrides: {
                name: 'facebook',
                label: 'Facebook URL',
                required: false,
              },
            }),
            link({
              appearances: false,
              disableLabel: true,
              overrides: {
                name: 'twitter',
                label: 'Twitter URL',
                required: false,
              },
            }),
            link({
              appearances: false,
              disableLabel: true,
              overrides: {
                name: 'instagram',
                label: 'Instagram URL',
                required: false,
              },
            }),
            link({
              appearances: false,
              disableLabel: true,
              overrides: {
                name: 'linkedin',
                label: 'LinkedIn URL',
                required: false,
              },
            }),
          ],
          label: 'Social Media Links',
        },
      ],
    },
  ],
}