# Optional: Check Auth State When App Resumes

We added an "Auto Logout" functionality to the app in this module.

You could also check the authentication status when the app resumes - to make sure that the user is logged out even if the app was running in the background (of course only, if the token did invalidate in the meantime).

Acting when the app resumes is easy - you can use Capacitor for that:

E.g. in `AppComponent`:

```javascript
import { Plugins, AppState } from '@capacitor/core';
... // Other imports or code
```

With the `Plugins` imported, you can set up a listener to state changes of your app (here, "state" refers to the general state of your app - i.e. if it's in the background or foreground).

Still in `AppComponent`:

```javascript
ngOnInit() {
    ... // Other code
    Plugins.App.addListener('appStateChange', this.checkAuthOnResume.bind(this));
}

ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
}

private checkAuthOnResume(state: AppState) {
    if (state.isActive) {
      this.authService
        .autoLogin()
        .pipe(take(1))
        .subscribe(success => {
          if (!success) {
            this.onLogout();
          }
        });
    }
  }
```

Attached, you find the course project with this feature implemented.

Also see: https://capacitor.ionicframework.com/docs/apis/app

# Useful Resources & Links

Learn more about JSON Web Tokens: https://jwt.io/
