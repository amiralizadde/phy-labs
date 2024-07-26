"use client"
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const locale = useLocale()
  const paths = usePathname();
  const t = useTranslations('navbar')
  const pathNames = paths.split('/').filter((path) =>path).slice(1)
  
  // const getTranslatedPath = (path: string) => {
  //   return [locale]?.[path] || path}`);
  // };
  

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        <p className='text-blue-900'>{pathNames.length > 0 && separator}</p>
        {pathNames.map((link, index) => {
          let href = `/${locale}/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
            // let translatedLink = getTranslatedPath(link);
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;