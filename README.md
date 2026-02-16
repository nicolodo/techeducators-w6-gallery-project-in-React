Reflections
Instructions
User Stories
1🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
2🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
3🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
4🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
5🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
6🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
7🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

    -Nicolas: I could've split up the gallery click bar and the large image into two different components.
Requirements
1🎯 Implement the useState hook to manage gallery state (e.g. selected image).
2🎯 Use useEffect for initial fetching of images from an external API.
3🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
    -Nicolas: Each image is configured in a loop rather than by making a new component
    <Image src="" key="" alt="" tabindex=0>
4🎯 Use the .map() function to render an array of images dynamically
    -N: This was done.
5🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
6🎯 Ensure all images have meaningful alt text.
7🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

Stretch User Stories
🐿️ As a user, I want to be able to change the images in the gallery using a search bar.
🐿️ As a developer, I want to be able to fetch images from an API with a larger amount of data, such as Unsplash.
🐿️ As a developer I don’t want anyone to know my API keys from code.
🐿️ As a user I want the app to look pleasing.
Stretch Requirements
🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
🏹 Set up an Unsplash application that you can fetch from your React app.
🏹 Use .env to hide your API keys and tokens from the code.
🏹 Style the application excellently, using grid or flex and positioning.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
    N:I w3 schools and went back through the demo code for week 3
What errors or bugs did you encounter while completing your assignment? How did you solve them?
    N:
What went really well and what could have gone better?
Submission Instructions
Please submit your Render deployment URL and your GitHub repository URL.