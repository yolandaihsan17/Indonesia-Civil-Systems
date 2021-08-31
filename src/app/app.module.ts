import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { PajakComponent } from './pages/pajak/pajak.component';
import { KependudukanComponent } from './pages/kependudukan/kependudukan.component';
import { KesehatanComponent } from './pages/kesehatan/kesehatan.component';
import { PendidikanComponent } from './pages/pendidikan/pendidikan.component';
import { DaruratComponent } from './pages/darurat/darurat.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    PajakComponent,
    KependudukanComponent,
    KesehatanComponent,
    PendidikanComponent,
    DaruratComponent,
    TitleComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
