# Filtering & Navigation

With the current implementation, you might notice a tiny bug if you filtered for "Bookable Places", clicked "More" and then navigated back to the "Discover" page by pressing the "Back" button on the "Place Detail" page.

On the "Discover" page (where "Bookable Places" is still selected), you'll now see all places listed instead of only the bookable ones.

This bug occurs because we do fetch all places when the page is loaded because of `ionViewWillEnter`. In the subscription inside of `ngOnInit`, we then don't take any filter into account.

This solution, originally shared by Jost (https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13803718#questions/7986186) fixes this behavior:

You can add a property where you store the currently set filter, for example (directly inside of the `DiscoverPage` class):

```javascript
// listedLoadedPlaces: Place[];
private filter = 'all';
```

Inside of `ngOnInit`:

```javascript
ngOnInit() {
  this.placesSub = this.placesService.places.subscribe(places => {
    this.loadedPlaces = places;
    this.onFilterUpdate(this.filter);
  });
}
```

Inside of `onFilterUpdate`, you can then store the currently chosen filter:

```javascript
onFilterUpdate(filter: string) {
  const isShown = place => filter === 'all' || place.userId !== this.authService.userId;
  this.relevantPlaces = this.loadedPlaces.filter(isShown);
  this.filter = filter;
}
```

Please note:

1.

To make this code work, we have to pass a filter string instead of the full event:

```html
<ion-segment (ionChange)="onFilterUpdate($event.detail.value)"></ion-segment>
```

2.

I've removed `listedLoadedPlaces` from the code above, since this situation would be a perfect use case for the `slice` pipe (assuming you are using `<ion-list>`):

```html
<ion-list
  ><ion-item *ngFor="let place of relevantPlaces | slice:1" ...>
    ...</ion-item
  ></ion-list
>
```

But if you want to use `<ion-virtual-scroll>` - even though it is not yet production ready and still very buggy (https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/lecture/13758084) - you will have to slice the array manually (unfortunately!), like shown in the official course code:

```javascript
this.listedLoadedPlaces = this.relevantPlaces.slice(1);
```

3.

The code above refers to sections 11 - 14. At the end of section 15, with authentication implemented, the filter method should then look like this:

```javascript
onFilterUpdate(filter: string) {
  this.authService.userId.pipe(take(1)).subscribe(userId => {
    const isShown = place => filter === 'all' || place.userId !== userId;
    this.relevantPlaces = this.loadedPlaces.filter(isShown);
    this.filter = filter;
  });
}
```

# Useful Resources & Links

- How to pass data around in Angular: https://academind.com/learn/angular/angular-q-a/#how-can-you-pass-data-from-a-to-b-e-g-between-components
