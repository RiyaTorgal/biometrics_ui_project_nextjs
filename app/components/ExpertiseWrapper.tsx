import { getHomepage } from "@/app/lib/queries";
import { Expertise } from "./Expertise";

export default async function ExpertiseWrapper() {
  const home = await getHomepage();

  return (
    <Expertise
      leadershipPhoto={home.leadershipPhoto?.asset?.url}
      leadershipTitle={home.leadershipTitle}
      leadershipName={home.leadershipName}
      leadershipSubtitle={home.leadershipSubtitle}
      leadershipBio1={home.leadershipBio1}
      leadershipBio2={home.leadershipBio2}
    />
  );
}