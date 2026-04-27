export const revalidate = 30;

import TermsOfService from "./TermsOfServiceComponent";
import { getTermsOfService } from "@/app/lib/queries";

export default async function Page() {
  const data = await getTermsOfService();
  return <TermsOfService data={data} />;
}