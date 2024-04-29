import { Component } from '@angular/core';
import { Fish } from '../../types/fish.model';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.scss'],
})
export class AddFishComponent {
  newFish: Fish = {
    name: '',
    habitat: '',
    size: '',
    weight: '',
    diet: '',
    baits: [],
    timeOfYear: '',
    timeOfDay: '',
    bestSpots: '',
  };
  photoFiles: File[] = [];
  photoUrls: string[] = [];

  addFish() {
    // Save fish data to local storage
    let savedFish: Fish[] = JSON.parse(localStorage.getItem('fish') || '[]');
    savedFish.push(this.newFish);
    if (this.newFish.name) {
      localStorage.setItem('fish', JSON.stringify(savedFish));

      // Save fish photos to local storage (optional)
      this.savePhotos();
    }

    // Reset form fields
    this.newFish = {
      name: '',
      habitat: '',
      size: '',
      weight: '',
      diet: '',
      baits: [],
      timeOfYear: '',
      timeOfDay: '',
      bestSpots: '',
    };
    this.photoFiles = [];
    this.photoUrls = [];
  }

  onPhotoChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.photoFiles = Array.from(event.target.files);
      // Display preview of selected photos
      this.photoUrls = this.photoFiles.map((file: File) =>
        URL.createObjectURL(file)
      );
    }
  }

  private savePhotos() {
    // Save photos to local storage (optional)
    for (let i = 0; i < this.photoFiles.length; i++) {
      const file = this.photoFiles[i];
      const reader = new FileReader();
      reader.onload = () => {
        const photoData = reader.result as string;
        localStorage.setItem(`fishPhoto_${this.newFish.name}_${i}`, photoData);
      };
      reader.readAsDataURL(file);
    }
  }
}
