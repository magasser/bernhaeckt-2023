import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountyService } from 'src/app/services/county.service';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {
  private id: string;

  constructor(private countyService: CountyService, private route: ActivatedRoute) {
    this.id = '';
  }

  async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';

      if (this.id === '') {
        return;
      }      
  }

}
