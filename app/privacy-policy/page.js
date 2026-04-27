export const revalidate = 30;

import { getPrivacyPolicy } from "@/app/lib/queries";
import PrivacyPolicy from "./PrivacyPolicyComponent";

export default async function Page() {
  const data = await getPrivacyPolicy();
  return <PrivacyPolicy data={data} />;
}