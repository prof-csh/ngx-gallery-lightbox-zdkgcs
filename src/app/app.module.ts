import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
