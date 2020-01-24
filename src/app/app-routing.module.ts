import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './screen/main/main.component';
import { DashboardComponent } from './screen/dashboard/dashboard.component';
import { IndxComponent } from './screen/indx/indx.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //{ path: 'main', component: MainComponent },
  { path:'dashboard', component:DashboardComponent, children:[
    { path: 'main', component: MainComponent },
    { path: 'indx', component: IndxComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
