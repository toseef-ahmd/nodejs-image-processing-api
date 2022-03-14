# Image Processing API

## Overview

This project involves working with Typescript and Node.js, conduct Unit Testing and write APIs such a way that when user visits an api endpoint with valid parameters, the image is resized and saved in a directory. If the same image is processed for the second time, already processed thumbnail is returned instead of processing again.

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
### 2. Run built code
`node dist/index`

## API Endpoints

#### 1. `/api/images/search??filename=imageName`

`localhost:3000/api/images/search?filename=fjord.jpg`

#### 2. `/api/images/resize?filename?filename=imageName&width=widthInt&height=heightInt`

`localhost:3000/api/images/resize?filename=fjord.jpg&width=300&height=300`

#### 3. `/api/thumbnails/search?filename=imageName`

`localhost:3000/api/thumbnails/search?filename=fjord_100_100.jpg`

#### 4. `/api/thumbnails/remove?filename=imageName`

`localhost:3000/api/thumbnails/remove?filename=fjord_100_100.jpg`

#### 5. Image and Thumbnails Directories
`src/static/images`

`src/static/thumbnails`


### Functionality

- Search an Image by name
- Resize image. If resized image is already available, then the thumbnail is returned instead of resizing again.
- Delete a thumbnail.
- Search a thumbnail by name.
