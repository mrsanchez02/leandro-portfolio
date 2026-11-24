import { SiteDocument } from "@/components/site-document";
import { SiteShell } from "@/components/site-shell";

export default function EntryLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteDocument locale="en">
      <SiteShell>{children}</SiteShell>
    </SiteDocument>
  );
}
