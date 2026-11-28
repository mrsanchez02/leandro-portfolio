import { profile } from "@/content/home";
import { contactDestinations, contactProfiles } from "@/content/profile-pages";
import { defaultLocale, type Locale } from "@/lib/locales";
import { localizedUrls } from "@/lib/site-url";

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const url = localizedUrls("home")?.[defaultLocale];
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    ...(url && { "@id": `${url}#person`, url }),
    name: profile.name,
    jobTitle: profile.role[locale],
    address: { "@type": "PostalAddress", addressCountry: profile.country },
    email: contactDestinations.email,
    sameAs: contactProfiles.map(({ href }) => href),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(person).replace(/</g, "\\u003c"),
    }} />
  );
}
