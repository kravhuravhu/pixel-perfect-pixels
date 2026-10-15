import { Link, useLocation } from '@tanstack/react-router';
import { LogOut, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

const navigation = [
  ['/', '📊', 'Dashboard'], ['/timesheets', '📋', 'Timesheets (All)'],
  ['/leave', '🏖️', 'Leave Requests'], ['/projects', '📊', 'My Projects'],
  ['/assets', '💻', 'Loaned Assets'], ['/documents', '💻', 'Documents'],
  ['/profile', '👥', 'My Profile'], ['/notifications', '🔐', 'Notifications'],
] as const;

export function pageHead(title: string) {
  const description = `${title} — NKS Capital Employee Management System.`;
  return { meta: [{ title: `${title} | NKS Capital` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | NKS Capital` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}

export function NksShell({ title, breadcrumb, children }: { title?: string; breadcrumb?: string; children: ReactNode }) {
  const { pathname } = useLocation();
  return <div className="nks-app">
    <header className="app-header">
      <Link to="/" className="brand" aria-label="NKS Capital home"><div><span>NKS</span><strong>Capital</strong></div><small>Employee Management System</small></Link>
      {title && <div className="page-heading"><h1>{title}</h1><p>Dashboard &gt; {breadcrumb || title}</p></div>}
      <div className="employee"><div><span>Khuliso Ravhuravhu</span><small>Software Developer</small></div><div className="employee-avatar"><UserRound aria-hidden="true" /></div></div>
    </header>
    <div className="app-layout">
      <aside className="sidebar"><nav aria-label="Main navigation">{navigation.map(([to, icon, label]) => <Link key={to} to={to} className={`nav-item ${pathname === to || (to === '/profile' && pathname === '/security') ? 'is-active' : ''}`}><span aria-hidden="true">{icon}</span>{label}</Link>)}</nav><Button variant="quiet" className="logout" onClick={() => window.alert('This is a frontend recreation; no login session is connected.')}><LogOut />Log Out</Button></aside>
      <main className={`page-content ${pathname === '/' ? 'dashboard-content' : ''}`}>{children}</main>
    </div>
  </div>;
}