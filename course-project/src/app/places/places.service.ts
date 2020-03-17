import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City.",
      "https://local12.com/resources/media/866c7412-79b7-401d-a927-0816656b54ee-large16x9_39East72ndStreetUpperEastSideNewYork_Lauren_Muss_DouglasElliman_Photography_81460525_high_res.jpg?1565893378398",
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://www.patrice-besse.com/uploads/bien/12266/zoom/bb6217801d0bcbfd87e89f1c785aa591.jpg",
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "https://i.pinimg.com/originals/10/76/27/107627f05c308c4eb4db2f90e89b93cd.jpg",
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find(el => el.id === id) };
  }

  constructor() { }
}
