import { Component, OnInit } from '@angular/core';
import { Fish } from '../../types/fish.model';

@Component({
  selector: 'app-fish-selection',
  templateUrl: './fish-selection.component.html',
  styleUrl: './fish-selection.component.scss',
})
export class FishSelectionComponent implements OnInit {
  savedFish: Fish[] = [];

  constructor() {}

  ngOnInit() {
    this.savedFish = JSON.parse(localStorage.getItem('fish') || '[]');
  }
}
