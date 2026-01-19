import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'
import React from 'react'

import type { SiteSetting } from '@/payload-types'

export async function SocialLinks() {
  const siteSettingsData = (await getCachedGlobal('siteSettings', 1)()) as SiteSetting

  const facebook = siteSettingsData?.facebook || null
  const twitter = siteSettingsData?.twitter || null
  const instagram = siteSettingsData?.instagram || null
  const linkedin = siteSettingsData?.linkedin || null

  return (
    <ul className="flex gap-4">
      { facebook ? <CMSLink key={"facebook"} {...facebook} appearance="link" label="Facebook" /> : null }
      { twitter ? <CMSLink key={"twitter"} {...twitter} appearance="link" label="Twitter" /> : null }
      { instagram ? <CMSLink key={"instagram"} {...instagram} appearance="link" label="Instagram" /> : null }
      { linkedin ? <CMSLink key={"linkedin"} {...linkedin} appearance="link" label="LinkedIn" /> : null }
    </ul>
  )
}
