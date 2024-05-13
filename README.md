# Virtual Scroll Grid Project

This project demonstrates a virtual scroll grid using React. It displays a grid of images fetched from Unsplash. The grid is implemented using a virtual scroll technique, which means that only the images currently visible (and a small buffer) are rendered at any given time. This approach greatly improves performance for large lists.

## GridItem Component

The `GridItem` component is a simple functional component that receives an `id` as a prop and uses it to fetch a random image from Unsplash. It also displays the `id` at the bottom of the image.

## Running the Project

To run this project, you need to have Node.js and npm installed on your machine.

1. Clone the repository: `git clone https://github.com/rsach/virtual-scroll.git`
2. Navigate into the project directory: `cd abcd`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`



The application will start and can be accessed at `http://localhost:3000`.

## Testing

To run the tests for the `GridItem` component, use the following command: `npm run test`

## DEMO URL:- [Demo](https://rsach.github.io/virtual-scroll/)

## Screenshot:-  


