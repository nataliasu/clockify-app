import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SupportComponent } from './components/support/support.component';
import { TagsComponent } from './components/tags/tags.component';
import { TeamComponent } from './components/team/team.component';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';
import { TimeTrackerListComponent } from './components/time-tracker/time-tracker-list/time-tracker-list.component';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeTrackerService } from './services/time-tracker.service';
import { MaterialModule } from './material/material.module';
import { ConvertTimePipe } from './pipes/convert-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    DashboardComponent,
    ProjectsComponent,
    ReportsComponent,
    SupportComponent,
    TagsComponent,
    TeamComponent,
    TimeTrackerComponent,
    TimeTrackerListComponent,
    WorkspacesComponent,
    HeaderComponent,
    ConvertTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [TimeTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
