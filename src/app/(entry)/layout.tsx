import { SiteDocument } from "@/components/site-document";

export default function EntryLayout({ children }: LayoutProps<"/">) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
