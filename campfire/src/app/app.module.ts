import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AjaxComponent } from './ajax/ajax.component';
import { JoinEventComponent } from './join-event/join-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventStartComponent } from './create-event/event-start/event-start.component';
import { EventActivitiesComponent } from './create-event/event-activities/event-activities.component';
import { EventTransportationComponent } from './create-event/event-transportation/event-transportation.component';
import { FinishComponent } from './create-event/finish/finish.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerDashboardComponent } from './dashboard/owner-dashboard/owner-dashboard.component';
import { EditorDashboardComponent } from './dashboard/editor-dashboard/editor-dashboard.component';
import { ViewerDashboardComponent } from './dashboard/viewer-dashboard/viewer-dashboard.component';
import { EventFeedComponent } from './event-feed/event-feed.component';
import { EventBasicsComponent } from './create-event/event-basics/event-basics.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'createEvent', component: CreateEventComponent},
  {path: "joinEvent", component: JoinEventComponent},
  {path: "eventStart", component: EventStartComponent},
  {path: "eventBasics", component: EventBasicsComponent},
  {path: "eventActivities", component: EventActivitiesComponent},
  {path: "eventTransportation", component: EventTransportationComponent},
  {path: "finish", component: FinishComponent},
  {path: "ownerDashboard", component: OwnerDashboardComponent},
  {path: "editorDashboard", component: EditorDashboardComponent}, 
  {path: "viewerDashboard", component: ViewerDashboardComponent},
  {path: "eventFeed", component: EventFeedComponent} 

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjaxComponent,
    JoinEventComponent,
    CreateEventComponent,
    EventStartComponent,
    EventActivitiesComponent,
    EventTransportationComponent,
    FinishComponent,
    DashboardComponent,
    OwnerDashboardComponent,
    EditorDashboardComponent,
    ViewerDashboardComponent,
    EventFeedComponent,
    EventBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
