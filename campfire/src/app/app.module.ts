import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AjaxComponent } from './ajax/ajax.component';
import { JoinEventComponent } from './join-event/join-event.component';
import { CreateEventComponent } from './create-event/create-event.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'createEvent', component: CreateEventComponent},
  {path: "joinEvent", component: JoinEventComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjaxComponent,
    JoinEventComponent,
    CreateEventComponent
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
