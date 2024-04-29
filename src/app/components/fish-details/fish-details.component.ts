import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fish } from '../../types/fish.model';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.component.html',
  styleUrls: ['./fish-details.component.scss'],
})
export class FishDetailsComponent implements OnInit {
  fish: Fish | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // Retrieve fish data from local storage based on the name
      const fishName = params['name'];
      const savedFish: Fish[] = JSON.parse(
        localStorage.getItem('fish') || '[]'
      );
      console.log("🚀 ~ FishDetailsComponent ~ this.route.queryParams.subscribe ~ savedFish:", savedFish)
      this.fish = savedFish.find((f) => f.name === fishName);
    });
  }
}
