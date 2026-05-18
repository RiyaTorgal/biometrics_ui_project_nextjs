export const revalidate = 30;

import Collaborations from "./CollaborationsComponent";
import {getCollaborations, getPastInterns} from "../lib/queries";


export default async function CollaborationsPage() {
  const collaborations = await getCollaborations();
  const pastInterns = await getPastInterns();
  return <Collaborations collaborations={collaborations} pastInterns={pastInterns} />;
}