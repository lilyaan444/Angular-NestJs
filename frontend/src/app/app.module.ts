import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DriversComponent,
    ConstructorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
