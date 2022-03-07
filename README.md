# Image Processing API

## Overview

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Run Server

`npm start`

This command will run the project and start the server on http://localhost:3000

### 3. Build

`npm run build`

Creates the Javascript files in the `./dist` folder.


## Testing

### 1. Testing

`npm run test`

## API Endpoints

### `/api/images/search??filename=imageName`

`localhost:3000/api/images/search?filename=fjord.jpg`

### `/api/images/resize?filename?filename=imageName&width=widthInt&height=heightInt`

`localhost:3000/api/images/resize?filename=fjord.jpgwidth=300&height=300`

### `/api/thumbnails/search?filename=imageName`

`localhost:3000/api/thumbnails/search?filename=fjord_100_100.jpg`

### `/api/thumbnails/remove?filename=imageName`

`localhost:3000/api/thumbnails/remove?filename=fjord_100_100.jpg`

### Image and Thumbnails Directories
`src/static/images`
`src/static/thumbnails`


### Functionality

- Search an Image by name
- Resize image. If resized image is already available, then the thumbnail is returned instead of resizing again.
- Delete a thumbnail.
- Search a thumbnail by name
