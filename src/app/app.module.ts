import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { FoundersComponent } from './founders/founders.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    FoundersComponent,
    HomeComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Comandos para hacer deploy en github
ng build --prod --base-href https://willingtonortiz.github.io/cubipool-landing-page/
ngh --dir=dist/cubipool-landing-page
*/