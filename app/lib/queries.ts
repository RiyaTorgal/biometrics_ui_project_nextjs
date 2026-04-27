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
      heroImageMobile{
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
        idealFor,
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
        idealFor,
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

export async function getPastAchievements() {
  return sanity.fetch(`
    *[_type == "pastAchievements"][0]{
      sectionTitle,
      sectionSubtitle,

      subsections[]{
        title,
        subtitle,
        description,
        icon{
          asset->{url}
        },
        links[]{
          label,
          url
        }
      },

      talksHeading,
      talks[]{
        year,
        title,
        description,
        image{
          asset->{url}
        },
        links[]{
          label,
          url
        }
      }
    }
  `);
}

export async function getPrivacyPolicy() {
  return sanity.fetch(`
    *[_type == "privacy"][0]{
      SectionIcon{
        asset->{url}
      },
      SectionTag,
      SectionTitle,
      SectionDescription,
      SectionDate,

      privacyPolicy[]{
        title,
        description,
        descriptionPoints,
        icon{
          asset->{url}
        }
      }
    }
  `);
}

export async function getTermsOfService() {
  return sanity.fetch(`
    *[_type == "termsOfService"][0]{
      SectionIcon{
        asset->{url}
      },
      SectionTag,
      SectionTitle,
      SectionDescription,
      SectionDate,

      terms[]{
        title,
        description,
        descriptionPoints,
        icon{
          asset->{url}
        }
      }
    }
  `);
}