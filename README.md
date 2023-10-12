# WindowJS

## What is WindowJS?

WindowJS is a JavaScript library that allows you to create popups in your web pages. It is very easy to use and it is very lightweight.

## How do I use WindowJS?

To use WindowJS, you must first include the WindowJS script in your HTML file. You can do this by adding the following code to your HTML file:

```html
<script src="./js/windowjs-1-0-0.js"></script>
```

## How do I create a popup?

To create a popup, you must first create a new instance of the WindowJS class. You can do this by adding the following code to your JavaScript file:

```js
new WindowJS();
```

Then, you add two parameters to the WindowJS class. The first parameter is the identifier of the element that you want to use as the popup. The second parameter is the a object that contains the settings for the popup. You can do this by adding the following code to your JavaScript file:

```js
new WindowJS(".popup", {
	width: "500px", // The width of the popup
	height: "500px", // The height of the popup
	title: "Popup", // The title of the popup
	autoOpen: true, // Whether the popup should open automatically
});
```

## Future Updates

-   [x] ~~Add support for popup sizes~~
-   [x] ~~Add support for title~~
-   [x] ~~Add support for auto open~~
-   [ ] Add support for popup positions
-   [ ] Add support for dragging popups
-   [ ] Add support for resizing popups
-   [ ] Add support for popup animations
-   [ ] Increase the performance of the library

## Examples

You can find examples of WindowJS in the test folder.

## License

WindowJS is licensed under the MIT license.
