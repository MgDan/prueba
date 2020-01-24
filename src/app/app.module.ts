import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './screen/main/main.component';
import { MatTabsModule, MatTableModule, MatButtonModule } from '@angular/material';
import  { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './screen/dashboard/dashboard.component';
import { IndxComponent } from './screen/indx/indx.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    IndxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
