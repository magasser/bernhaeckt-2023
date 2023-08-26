import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizerComponent } from './pages/data-visualizer/data-visualizer.component';
import { DataManagerComponent } from './pages/data-manager/data-manager.component';

const routes: Routes = [
  { path: '', component: DataVisualizerComponent },
  { path: 'admin', component: DataManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }