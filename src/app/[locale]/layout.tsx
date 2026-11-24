import { notFound } from "next/navigation";
import { SiteDocument } from "@/components/site-document";
import { isLocale, locales } from "@/lib/locales";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
