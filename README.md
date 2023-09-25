# Note Taker Application
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This is a simple note taking application that allows users to create, save, and delete notes. The application uses an Express.js back end and saves and retrieves note data from a JSON file. During the development of this application, I learned how to use the GET, POST, and DELETE methods to create, save, and delete notes. I also learned how to use the uuid npm package to give each note a unique id so that it can be deleted from the JSON file. Going forward, it would be good to add a feature that allows users to edit notes that they have already created. 

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)


## Installation
N/A no installation required

## Usage
To use this application, visit the deployed application on Heroku: https://vast-beach-90939-45f7bfec0a20.herokuapp.com/
There you will see the following landing page:
![Screenshot homepage](https://github.com/milena-allaway/Note_Taker/assets/132115087/6e8fd447-c804-417e-8194-8a438bb0c6ca)


you can click on the "Get Started" button to be taken to the notes page:
![Screenshot notespage](https://github.com/milena-allaway/Note_Taker/assets/132115087/8edecf0f-44b4-4dea-91ef-db517a232785)


To create a new note, click on the plus icon in the top right corner. This will allow you to enter a title and text for your note, or clear the page if you need to start over. Once you have entered a title and text, you will see a save icon appear in the top right corner. Click on this icon to save your note. You can create as many notes as you like. To view a note, click on the note title in the left hand column. To delete a note, click on the trash can icon next to the note title.

## Credits
- [uuid npm package](https://www.npmjs.com/package/uuid)
- [Express.js](https://expressjs.com/)
- [Starter code](https://github.com/coding-boot-camp/miniature-eureka) provided front end code.
- Filter method for deleting notes from JSON file: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Referenced 11-Express\01-Activities\22-Stu_Modular-Routing from class activities, used util.js file code to read and write to JSON file/parse data.
- GitHub co-pilot for helping me write the comments and this README.md file, also for helping me write the code for the delete method.
- Katie Redford, my tutor, for helping me better understand routing. Also guiding me on how to extract the guts of the util.js file from the class activites to use in my server.js file to read and write data to the JSON file.

## License
  This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Contributing
Create an issue in repo: https://github.com/milena-allaway/Note_Taker/issues

## Tests
"echo \"Error: no test specified\" && exit 1"

## Questions
For any questions or feedback, please contact me via:
- GitHub: [milena-allaway](https://github.com/milena-allaway)
- Email: [milenawheatcroft@gmail.com](mailto:milenawheatcroft@gmail.com)

***

Made with ❤️ by Milena Allaway
