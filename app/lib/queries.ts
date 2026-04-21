import { sanity } from "./sanity";

export async function getHomepage() {
  return sanity.fetch(`
    *[_type == "homepage"][0]{
      heroTitle,
      heroCtaLabel,
      heroTagline,
      heroImage{
        asset->{url}
      },

      aboutTitle,
      aboutSubtitle1,
      aboutBody1,
      aboutSubtitle2,
      aboutBody2,

      leadershipName,
      leadershipTitle,
      leadershipSubtitle,
      leadershipBio1,
      leadershipBio2,
      leadershipPhoto{
        asset->{url}
      }
    }
  `);
}

export async function getServices() {
  return sanity.fetch(`
    {
      "lectures": *[_type == "lecture"]{
        _id,
        title,
        duration,
        description,
        mode,
        date,
        category,
        priceNote,
        originalPrice,
        priceLabel,
        discountPercent,
        instructor,
        content,
        includes,
        thumbnail{
          asset->{url}
        }
      },

      "workshops": *[_type == "workshop"]{
        _id,
        title,
        duration,
        description,
        mode,
        category,
        priceNote,
        originalPrice,
        discountedPrice,
        discountPercent,
        instructor,
        content,
        includes,
        thumbnail{
          asset->{url}
        }
      },

      "consultations": *[_type == "consultation"]{
        _id,
        title,
        duration,
        mode,
        audience,
        description,

        priceLabel,
        cta,
        includes,
        thumbnail{
          asset->{url}
        }
      }
    }
  `);
}