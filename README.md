![jMAP image](img/jmap.jpg)

Which information is indispensable? It is the question asked throughout this little project exploring with [Google Maps API](https://developers.google.com/maps/documentation/javascript/). You can find this project [here](http://yukinokoh.github.io/jMap/).

## Structure
- `index.html`: html that shows the map on browser, 
	loading necessary js files
- js
  - `map.js`: javascript to customize Google Maps
  - `circle.js`: javascript to plot data in the map
  - `xxArray.js`: Data to plot in the map
- css
  - `style.css`: css to custom text area
- img
  - `close.png`: only in case of use infobubble, which is in default cross outed
  - `favion.png`: favicon image 
  - `jmap.jpg`: image for this page (README)
- README.md
- LICENSE.txt

## Usage
### To edit title and introduction
Edit **h1**  and **p** elements in *var dafault\_text* in `circle.js` 

## To edit plotting data
1. Edit `xxArray.js`.
```javascript

var your_category_name = {};
your_category_name['name_of_place'] = {
        latlng: [lat, lng],
        url: 'url_that_provides_information_of_the_place'
};

```
Elements to edit:
- your_category_name 
- name_of_place
- lat, lng
- url_that_provides_information_of_the_palce

2. Load your `xxArray.js` in `index.html`.
```html

<script type="text/javascript" src="js/xxArray.js"></script>

``` 

3. Pass the data to *drawArray() * function in `map.js`. 
```javascript

drawArray(your_category_name,'#color', 'your_class_name');

```
- your_category_name: It should match with *yuor_category_name* defined in step 1.
- #color: Color of plotted circle in the map.
- your_class_name: Class defined in `style.css`

## To edit map style
Edit map options in `map.js`

Documentation of [Style Reference](https://developers.google.com/maps/documentation/javascript/style-reference)

## To edit custom Marker
Edit **circle** in `circle.js`

Documentation of [Custom Marker](https://developers.google.com/maps/documentation/javascript/examples/marker-symbol-custom)

