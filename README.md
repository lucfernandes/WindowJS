# WindowJS

## What is WindowJS?

WindowJS is a JavaScript library that allows you to create popups/windows in your web pages. It is very easy to use and it is very lightweight.

## How do I use WindowJS?

To use WindowJS, you must first include the WindowJS script in your HTML file. You can do this by adding the following code to your HTML file:

```html
<!-- On head --->
<link rel="stylesheet" href="./css/windowjs-1-0-0.css" />
<script src="./js/windowjs-1-0-0.js"></script>
```

## How do I create a new window?

To create a new window, you must first create element that you want to use as the window. You can do this by adding the following code to your HTML file:

```html
<div class="window">
	<h1>window name</h1>
	<p>window content</p>
</div>
```

Then, you must create a new instance of the WindowJS class. You can do this by adding the following code to your JavaScript or HTML (in script tag) file:

```js
const window1 = new WindowJS();
```

Then, you add two parameters to the WindowJS class. The first parameter is the identifier of the element that you want to use as the window. The second parameter is the a object that contains the settings for the window. You can do this by adding the following code to your JavaScript file:

```js
new WindowJS(".window", {
	width: "500px", // The width of the window
	height: "500px", // The height of the window
	title: "WindowJs Example", // The title of the window
	autoOpen: true, // Whether the window should open automatically
});
```

## Options available for windowsJs

| Option    | Type           | Default Value | Description                                        |
| --------- | -------------- | ------------- | -------------------------------------------------- |
| width     | string         | "80%"         | The width of the window. Example: "500px", "100%"  |
| height    | string         | "500px"       | The height of the window. Example: "500px", "100%" |
| title     | string/boolean | false         | The title of the window                            |
| autoOpen  | boolean        | true          | Whether the window should open automatically       |
| draggable | boolean        | false         | Whether the window should be draggable             |

## Methods available for windowsJs

| Method        | Description      |
| ------------- | ---------------- |
| openWindow(); | Opens the window |

## Examples

You can find examples of WindowJS in the test folder.

## Future Updates

-   [x] ~~Add support for window sizes~~
-   [x] ~~Add support for window title~~
-   [x] ~~Add support for auto open the window~~
-   [x] ~~Add support for draggable windows~~
-   [ ] Add support for resizing popups
-   [ ] Add support for popup positions
-   [ ] Add support for popup animations
-   [ ] Increase the performance of the library

## License

WindowJS is licensed under the MIT license.
