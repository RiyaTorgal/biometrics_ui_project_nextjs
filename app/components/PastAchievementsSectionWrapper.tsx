import { getPastAchievements } from "@/app/lib/queries";
import { PastAchievementsSection } from "./PastAchievementsSection";

export default async function PastAchievementsSectionWrapper() {
  const data = await getPastAchievements();

  if (!data) return null;

  return (
    <PastAchievementsSection data={data} />
  );
}