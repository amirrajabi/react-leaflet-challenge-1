# Leaflet & React challenge

## Introduction
This challenge is a simple introduction to the [Leaflet](https://leafletjs.com/) library and React.

## Instructions
Start by creating a new React app using the create-react-app command.
```bash
create-react-app my-app
```

Install the Leaflet library and React using npm.
```bash
npm install react react-dom leaflet
npm install -D @types/leaflet
```

You can follow the Get Started guide to learn more about React and Leaflet.
https://react-leaflet.js.org/docs/start-introduction/

## Challenge
We want to display a map that can visualize the data we have in the `data/` directory.
Data is stored in GeoJSON format. Leaflet has a built-in layer for GeoJSON. We can use this to display the data.

The provided data has multiple features. We want to display each feature on the map.
Also, we want to display a popup for each feature when the user clicks on the feature.
Popups should display the name of the feature and the area attribute which is associated with the feature.

### Bonus Challenge
Make the map zoom to the extent of the data.
What this means is that the map should be zoomed to show the entire extent of the data.

If you imagine the data as a map, you can think of the extent as the bounding box of the data.
The bounding box is the smallest rectangle that can contain all the data.

## Data
The data is stored in the `data/` directory.

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Central Park",
        "area": 8.43
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-73.97, 40.77],
            [-73.98, 40.77],
            [-73.98, 40.76],
            [-73.97, 40.76],
            [-73.97, 40.77]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Statue of Liberty",
        "area": 2.0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-74.03, 40.68],
            [-74.04, 40.68],
            [-74.04, 40.67],
            [-74.03, 40.67],
            [-74.03, 40.68]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Empire State Building",
        "area": 7.0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-73.98, 40.74],
            [-73.99, 40.74],
            [-73.99, 40.73],
            [-73.98, 40.73],
            [-73.98, 40.74]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Brooklyn Bridge",
        "area": 1.5
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-73.99, 40.71],
            [-74.00, 40.71],
            [-74.00, 40.70],
            [-73.99, 40.70],
            [-73.99, 40.71]
          ]
        ]
      }
    }
  ]
}
```