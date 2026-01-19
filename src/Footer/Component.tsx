import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import type { SiteSettings } from '@/payload-types'

// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { SocialLinks } from '@/components/SocialLinks/SocialLinks'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const siteSettingsData: SiteSettings = await getCachedGlobal('site-settings', 1)()

  const footerPrimaryItems = footerData?.footerPrimaryItems || []
  const footerServicesItems = footerData?.footerServicesItems || []

  const footerLogo = footerData?.footerLogo || null
  const footerBlurb = footerData?.footerBlurb || null

  return (
    <footer className="">
      <div className="container py-8 gap-8 flex flex-col md:flex-row">

        <div className="grid grid-cols-3 gap-x-16">
          <div className="flex flex-col gap-y-[1rem]">
            <Link className="flex items-center" href="/">
              <Logo src={footerLogo?.url} className="h-12 w-auto" />
            </Link>

            {footerBlurb && <div className="text-sm" dangerouslySetInnerHTML={{ __html: footerBlurb }}></div>}

            <SocialLinks />
          </div>
          <div className="flex flex-col gap-y-[1rem]">
            <span className="block h3">Quick Links</span>

            {footerPrimaryItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} appearance="link" />
            })}
          </div>
          <div className="flex flex-col gap-y-[1rem]">
            <span className="block h3">Services</span>

            {footerServicesItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} appearance="link" />
            })}
          </div>
        </div>

      </div>
    </footer>
  )
}
