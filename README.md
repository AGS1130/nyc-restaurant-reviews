# NYC Restaurant Reviews App

## Starting the app

Start a simple HTTP server to serve up the site files on your local computer. You can use:

### Python
Python has some simple tools to start the app, and does not require knowledge of the language. For most people, it's already installed on your computer.

  * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
  * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.

 With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

### Node
With Node installed, `npm install -g live-server`. In your terminal, change directory into the root project directory, type `live-server` and hit `enter`.

  * In `dbhelper.js` file, change the `http://localhost:${port}/data/restaurants.json` to `http://127.0.0.1:${port}/data/restaurants.json`.

 With your server running, visit the site: `http://127.0.0.1:8000`, and look around for a bit to see what the current experience looks like.


## Dependencies

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.
