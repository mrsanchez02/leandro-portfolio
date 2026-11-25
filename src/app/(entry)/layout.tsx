import { SiteDocument } from "@/components/site-document";
import { defaultLocale } from "@/lib/locales";

export default function EntryLayout({ children }: LayoutProps<"/">) {
  return <SiteDocument locale={defaultLocale}>{children}</SiteDocument>;
}
