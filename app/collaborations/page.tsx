export const revalidate = 30;

import Collaborations from "./CollaborationsComponent";
import {getCollaborations} from "../lib/queries";


export default async function CollaborationsPage() {
  const collaborations = await getCollaborations();
  return <Collaborations collaborations={collaborations} />;
}