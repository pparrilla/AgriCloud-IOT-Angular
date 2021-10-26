import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './tables/tables.component';
import { GraphsComponent } from './graphs/graphs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    TablesComponent,
    GraphsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
