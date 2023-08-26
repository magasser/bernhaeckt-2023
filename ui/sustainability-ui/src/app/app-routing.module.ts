import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizerComponent } from './pages/data-visualizer/data-visualizer.component';
import { DataManagerComponent } from './pages/data-manager/data-manager.component';
import {DataEvaluationComponent} from "./pages/data-evaluation/data-evaluation.component";
import { CountyComponent } from './components/admin/county/county.component';

const routes: Routes = [
  { path: '', component: DataVisualizerComponent },
  { path: 'admin', component: DataManagerComponent },
  { path: 'admin/county/:id', component: CountyComponent },
  { path: 'evaluation', component: DataEvaluationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
