import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AjaxComponent } from './ajax/ajax.component';
import { JoinEventComponent } from './join-event/join-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventStartComponent } from './create-event/event-start/event-start.component';
import { EventCategoriesComponent } from './create-event/event-categories/event-categories.component';
import { EventTransportationComponent } from './create-event/event-transportation/event-transportation.component';
import { FinishComponent } from './create-event/finish/finish.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerDashboardComponent } from './dashboard/owner-dashboard/owner-dashboard.component';
import { EditorDashboardComponent } from './dashboard/editor-dashboard/editor-dashboard.component';
import { ViewerDashboardComponent } from './dashboard/viewer-dashboard/viewer-dashboard.component';
import { EventFeedComponent } from './event-feed/event-feed.component';
import { EventBasicsComponent } from './create-event/event-basics/event-basics.component';
import { DataVizComponent } from './data-viz/data-viz.component';
import { HttpService } from './http.service';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'createEvent', component: CreateEventComponent },
  { path: "joinEvent", component: JoinEventComponent },
  { path: "eventStart", component: EventStartComponent },
  { path: "eventBasics", component: EventBasicsComponent },
  { path: "eventCategories", component: EventCategoriesComponent },
  { path: "eventTransportation", component: EventTransportationComponent },
  { path: "finish", component: FinishComponent },
  { path: "ownerDashboard", component: OwnerDashboardComponent },
  { path: "editorDashboard", component: EditorDashboardComponent },
  { path: "viewerDashboard", component: ViewerDashboardComponent },
  { path: "eventFeed", component: EventFeedComponent },
  { path: "dataViz", component: DataVizComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjaxComponent,
    JoinEventComponent,
    CreateEventComponent,
    EventStartComponent,
    EventCategoriesComponent,
    EventTransportationComponent,
    FinishComponent,
    DashboardComponent,
    OwnerDashboardComponent,
    EditorDashboardComponent,
    ViewerDashboardComponent,
    EventFeedComponent,
    EventBasicsComponent,
    DataVizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
