import { getTeamSection } from "@/app/lib/queries";
import { TeamSection } from "./TeamSection";

export default async function TeamSectionWrapper() {
  const teamSection = await getTeamSection();
  
  return (
    <TeamSection 
        founder={teamSection?.founder}
        members={teamSection?.members ?? []} 
    />
  )
}