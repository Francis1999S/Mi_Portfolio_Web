import { AfterViewInit, Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(public dataService: DataService){}

  title = 'project';

  ngAfterViewInit() {
    // Simulate page load completion (you can adjust this based on your actual use case)
    setTimeout(() => {
      this.dataService.isPageLoaded = true;
    }, 4000);
  }
}
