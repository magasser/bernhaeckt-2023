import { Component } from '@angular/core';

@Component({
  selector: 'app-data-visualizer',
  templateUrl: './data-visualizer.component.html',
  styleUrls: ['./data-visualizer.component.scss']
})
export class DataVisualizerComponent {
  chartData = {
    labels: ['GeeksforGeeks', 'Tutorial Point', 'W3 Schools', 
             'Javatpoint', 'Indiabix', 'Codechef', 'Hackerrank'],
    datasets: [
        {
            label: 'Single Dataset',
            data: [75, 49, 95, 71, 66, 65, 45],
            backgroundColor: 'transparent',
            borderColor: 'lightgreen',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'lightgreen',
        }
    ]
};

}
