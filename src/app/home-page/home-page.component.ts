import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  show_work_management: boolean = true;
  show_it_service: boolean = false;
  show_agile_devops: boolean = false;

  workManagement() {
    this.show_work_management = true;
    this.show_it_service = false;
    this.show_agile_devops = false;
  }

  it_service() {
    this.show_work_management = false;
    this.show_it_service = true;
    this.show_agile_devops = false;
  }

  agile_devops() {
    this.show_work_management = false;
    this.show_it_service = false;
    this.show_agile_devops = true;
  }
}

