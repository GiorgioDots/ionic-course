import { Injectable } from "@angular/core";
import { Place } from "./place.model";
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City.",
      "https://local12.com/resources/media/866c7412-79b7-401d-a927-0816656b54ee-large16x9_39East72ndStreetUpperEastSideNewYork_Lauren_Muss_DouglasElliman_Photography_81460525_high_res.jpg?1565893378398",
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      "as"
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://www.patrice-besse.com/uploads/bien/12266/zoom/bb6217801d0bcbfd87e89f1c785aa591.jpg",
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      "asdf"
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "https://i.pinimg.com/originals/10/76/27/107627f05c308c4eb4db2f90e89b93cd.jpg",
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      "asdf"
    )
  ]);

  constructor(private authService: AuthService) { }

  get places() {
    return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.places.pipe(take(1), map(places => {
      return { ...places.find(el => el.id === id) };
    }));
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(Math.random().toString(), title, description, "https://blog.realestatediscount.it/wp-content/uploads/2018/10/comprare-una-casa-in-montagna-768x510.jpg", price, dateFrom, dateTo, this.authService.userId);
    return this.places.pipe(take(1), delay(1000), tap((places) => {
      this._places.next(places.concat(newPlace));
    }));
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(take(1), delay(1000), tap(places => {
      const updatedPlaceIndex = places.findIndex(el => { return el.id === placeId; })
      const updatedPlaces = [...places];
      const oldPlace = updatedPlaces[updatedPlaceIndex];
      updatedPlaces[updatedPlaceIndex] = new Place(oldPlace.id, title, description, oldPlace.imageUrl, oldPlace.price, oldPlace.availableFrom, oldPlace.availableTo, oldPlace.userId);
      this._places.next(updatedPlaces);
    }))
  }
}
