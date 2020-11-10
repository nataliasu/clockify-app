import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SupportComponent } from './components/support/support.component';
import { TagsComponent } from './components/tags/tags.component';
import { TeamComponent } from './components/team/team.component';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';

const routes: Routes = [
  { path: '', component: TimeTrackerComponent },
  { path: 'timetracker', component: TimeTrackerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component:  TeamComponent},
  { path: 'clients', component:  ClientsComponent},
  { path: 'tags', component:  TagsComponent},
  { path: 'workspaces', component:  WorkspacesComponent},
  { path: 'support', component:  SupportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
