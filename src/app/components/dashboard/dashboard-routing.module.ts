import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    { path: '', component: HomeComponent},
    { path: 'tables', component: TablesComponent},
    { path: 'graphs', component: GraphsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
