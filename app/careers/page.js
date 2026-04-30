export const revalidate = 30;

import Careers from "./CareersComponent";
import { getCareersPage } from "@/app/lib/queries";

export default async function Page() {
  const data = await getCareersPage();
  return <Careers data={data}/>;
}