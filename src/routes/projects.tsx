import { createFileRoute } from '@tanstack/react-router';
import { NksShell, pageHead } from '@/components/nks-shell';
import { Block, Badge } from '@/components/nks-common';
export const Route = createFileRoute('/projects')({ head: () => pageHead('My Projects'), component: Projects });
function Projects() { return <NksShell title="My Projects"><Block><h2>My Projects</h2><div className="table-scroll"><table><thead><tr><th>Project</th><th>Status</th></tr></thead><tbody>{['ERP implementation','CAS','Employee MS','Cybersecurity'].map((s,i) => <tr key={s}><td>{s}</td><td><Badge tone={i<2 ? 'green' : 'gold'}>{i<2 ? 'Active' : 'Assigned'}</Badge></td></tr>)}</tbody></table></div></Block></NksShell>; }
