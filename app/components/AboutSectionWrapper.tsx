import { getHomepage } from "@/app/lib/queries";
import { AboutSection } from "./AboutSection";

export default async function AboutSectionWrapper() {
  const home = await getHomepage();

  return (
    <AboutSection
      aboutTitle={home.aboutTitle}
      aboutSubtitle1={home.aboutSubtitle1}
      aboutBody1={home.aboutBody1}
      aboutSubtitle2={home.aboutSubtitle2}
      aboutBody2={home.aboutBody2}
    />
  );
}