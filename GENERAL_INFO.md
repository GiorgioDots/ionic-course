# Important: CSS Utility Attributes
One important note: If you're using __Ionic 5+__ (i.e. NOT Ionic version 4), you need to use CSS classes instead of the utility attributes I use in the videos.

For example:

```HTML
<h1 text-center>...</h1>
```
becomes

```HTML
<h1 class="ion-text-center">...</h1>
```
That's all!

You can check your `package.json` file to find out which version you're working with.

__Affected are all styling utility attributes__ like `text-center`, `text-left`, `no-padding`, `padding`, `margin` etc.

They would need to be changed to `class="ion-text-center"`, `class="ion-text-left"`, `class="ion-no-padding"` etc.

# Commands

## Create new project
`ionic start`

## Generate component/page/service/...
`ionic generate`

Pick one

## Prepare project for android emulation
`ionic capacitor run android`