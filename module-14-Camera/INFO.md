# Avoid Distorted Pictures

In the previous lecture, I showed how you can set the `width` and/ or `height` of the taken picture by passing the `width`/ `height` properties to the object you use for configuring the photo.

Of course, you might want to **only use one of the two properties** to avoid distorted images. Hence for this course, I recommend simply going with a `width: 600` or something along these lines.

# Capacitor v1 & PWA Elements

With Capacitor version 1, you add the PWA Elements, which we'll add in the next lecture, slightly different. Check your project package.json file to find out if you're using Capacitor version 1 (i.e. without any "beta" flag etc).

1. You no longer need to manually add a script import to index.html (i.e. manually adding `<script src="https://unpkg.com/@ionic/pwa-elements@1.0.1/dist/ionicpwaelements.js">` is not required!).

2. In your `main.ts` file, add this import:

```javascript
import { defineCustomElements } from '@ionic/pwa-elements/loader';
```

and call this method

```javascript
defineCustomElements(window);
```

after `platformBrowserDynamic().bootstrapModule(AppModule)...`

Also see: https://capacitor.ionicframework.com/docs/pwa-elements#installation

# Useful Resources & Links

- Official Capacitor Docs: https://capacitor.ionicframework.com

- Official Cloud Functions Docs: https://firebase.google.com/docs/functions/
