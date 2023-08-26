import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataVisualizerComponent } from './pages/data-visualizer/data-visualizer.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { DataManagerComponent } from './pages/data-manager/data-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CountiesComponent } from './components/admin/counties/counties.component';
import { IndicatorsComponent } from './components/admin/indicators/indicators.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {HeaderComponent} from "./components/header/header.component";
import {MatButtonModule} from "@angular/material/button";
import {DataEvaluationComponent} from "./pages/data-evaluation/data-evaluation.component";

@NgModule({
  declarations: [
    AppComponent,
    DataVisualizerComponent,
    RadarChartComponent,
    DataManagerComponent,
    CountiesComponent,
    IndicatorsComponent,
    HeaderComponent,
    DataEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
