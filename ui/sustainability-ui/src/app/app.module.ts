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
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from "./components/header/header.component";
import {DataEvaluationComponent} from "./pages/data-evaluation/data-evaluation.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCountyDialogComponent } from './components/admin/add-county-dialog/add-county-dialog.component';
import { VisualizationRowComponent } from './components/visualizer/visualization-row/visualization-row.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { VisualizationFilterComponent } from './components/visualizer/visualization-filter/visualization-filter.component';
import { CountyComponent } from './components/admin/county/county.component';

@NgModule({
  declarations: [
    AppComponent,
    DataVisualizerComponent,
    RadarChartComponent,
    DataManagerComponent,
    CountiesComponent,
    IndicatorsComponent,
    HeaderComponent,
    DataEvaluationComponent,
    AddCountyDialogComponent,
    VisualizationRowComponent,
    VisualizationFilterComponent,
    CountyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    PanelModule,
    MatFormFieldModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule, 
    MatInputModule, 
    FormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
