# Usage

Run npm install to download all the required packages from node.

Starting the application
- npm run start

Testing the application
- npm run test

# Task
Triangle Challenge:
Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

We are looking for solutions that showcase problem solving skills and structural considerations that can be applied to larger and potentially more complex problem domains. Pay special attention to tests, readability of code and error cases.

The way you reflect upon your decisions is important to us, why we ask you to include a brief discussion of your design decisions and implementation choices.

The resulting code and discussion is vital for us and will be used as a way for us to validate your engineering skills. After having reviewed your code, we’ll decide on next step.



# Design choices

### View library

I chose React as my view library because it is the library I think offers the best tools to build a Single Page Application. It is preferable to other alternatives such as Angular and Vue because it is modular and can be used in just parts of a project if that is preferred or if a new framework comes later you can start using that and have only the old parts in React and then rewrite them if you wish later.

It could be argued that React is too large and complex for the task and I would agree but as the task was to keep in mind structural considerations for a larger and potentially more complex problem domain I chose to include it immedietly.

### State management

I chose Redux as my state management library because I like the functional aspect of the state, where it is immutable and you replace it with an entire new state. This makes debugging easy with the Redux Dev Tools. I also prefer the single source of truth so you have the entire state in a global store to the implementation that Flux uses where you can have the stores at different places. This was you know where you have everything and you don't have to worry about where to store what.

### Bundler

I chose webpack as my bundler. Webpack is the de facto standard of the industry when it comes to React development. I chose between Webpack and Rollup and while I do like Rollups simplicity I think the choice of Webpack is clear because it has the much larger community support and this makes it easier for others to come into my project if that is ever a consideration.

With Webpack I am using babel to transpile React and the ES6 code to ES5 for compatability with older browsers.

### Tests

I have used Tape as my test library because it is small and very simple to use. It is used with TAP and it requires no testrunners or anything fancy at all. I believe I have test cases for all expected inputs.

### Extensibility

It is easy to start writing new components and new reducers for this application as the entire infrastructure is set up. A case could be made for swapping the structure of components/actions/containers into domains instead of types. For example everything related to Triangle in one folder to simplify working with one domain instead of having to go into a lot of different folders to try and add functionality. I felt however that this current structure gave me a better overview for a project this small and it is trivial to swap the folder structure later if so desired.

##### Error handling

All of my validation and basically the entire business logic is in the checkTriangle.js file in src/js/validation. I tried to make the error messages as clear to the user as possible and I think all the possible inputs are covered. Even if they are not, the function will return an "unexpected error".

The structure is such that first the file tells you what is exported so you know what is expected, then the exported function(s) come followed by the non-exported functions. The purpose of this structure is so a reader can go into a file and see what it exports. If you want to deep dive into the functions you can do that by checking the exported functions and see how the function. If you really want to get into the gritty details you can check all the non-exported functions aswell.

##### SASS or not?

I chose to not use SASS or any other preprocessor simply because I do not have much experience setting up the process or using SASS itself. I have used SASS in established codebases so I have some experience but I am more experienced with regular CSS.
