import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizerComponent } from './pages/data-visualizer/data-visualizer.component';
import { DataManagerComponent } from './pages/data-manager/data-manager.component';
import {DataEvaluationComponent} from "./pages/data-evaluation/data-evaluation.component";

const routes: Routes = [
  { path: '', component: DataVisualizerComponent },
  { path: 'admin', component: DataManagerComponent },
  { path: 'evaluation', component: DataEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
