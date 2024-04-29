import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFishComponent } from './components/add-fish/add-fish.component';
import { FishDetailsComponent } from './components/fish-details/fish-details.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { FormsModule } from '@angular/forms';
import { FishSelectionComponent } from './components/fish-selection/fish-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFishComponent,
    FishDetailsComponent,
    LocationDetailsComponent,
    FishSelectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
