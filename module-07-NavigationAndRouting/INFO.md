# MUST READ: Ionic 5 and Routing / Lazy Loading
If you're using Ionic 5, the generated pages come with __separate routing modules__ (i.e. one extra file).

In the lectures, we only see one module file instead - but there is __no real difference__.

In order to proceed smoothly, you can go with the generated files you get when running ionic generate. Simply keep the extra `.module.ts` file you get (i.e. don't delete or change anything).

If we make adjustments on routes in the lectures, simply do that in your `-routing.module.ts` files.

You also might see __a different lazy loading syntax__ - you can __keep that__ as well (i.e. you don't have to use the one from the videos).

For more details, please read below:

That __extra file__ you would get now looks like this (example: `auth-routing.module.ts`):

```javascript
// That's one of the generated page modules you get now
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AuthPage } from './auth.page';
 
const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
```

The respective `auth.module.ts` would look like this:

```javascript
// That's one of the generated page modules you get now
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';
 
import { AuthPageRoutingModule } from './auth-routing.module';
 
import { AuthPage } from './auth.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
```

As you can easily tell - combined, there is no real difference to the one-module setup you'll see in the course lectures:

```javascript
// This is what we have in the lecture videos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
 
import { AuthPage } from './auth.page';
 
const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
```

Instead of this one combined file, you now have two files.

In your `app-routing.module.ts` file, you also see a slightly different lazy loading syntax:

```javascript
{
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
}
```

instead of

```javascript
{ 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthPageModule' 
},
```

Theoretically, both should still work but if you're facing errors, go with the generated one (i.e. the first one).

# Useful Resources & Links

- Angular + Ionic Navigation Docs: https://ionicframework.com/docs/navigation/angular