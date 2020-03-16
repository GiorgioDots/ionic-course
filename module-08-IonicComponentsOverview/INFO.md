# Virtual Scrolling Bugs
Virtual scrolling is quite a complex technique behind the scenes and hence the component unfortunately can behave buggy.

At the point of time I recorded the course, more than 3 items weren't rendered correctly for example.

By using an `<ion-list>` (as we did before) instead of `<ion-virtual-scroll>` you can get rid of any bugs you might be facing - of course you lose the virtual scrolling functionality and might have to work around performance issues with other means (e.g. by loading less data).