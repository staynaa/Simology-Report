<!-- ![Alt text](/images/logo.png) -->
<div align="center">
    <img width="300" src="/images/logo.png">
    <h1>Where Creating A Sim is Made Simpler!</h1>
</div>
<div>
  <h3>What is Simology Report?</h3>
  <p>Simology Report is a tool made for <i>The Sims 4</i> players who find themselves struggling to come up with the perfect sim!</p>
  <h4> How so? </h4>
    Just like the in-game story mode feature found in Create A Sim Mode that requires players to answer eight questions to manually recieve an 
  aspiration, traits,a skill, and a career, Simology Report too provides a multiple choice questionaire that users can treat like a personality
  quiz. Simology Report however, provides users with more results to help give life to a sim before they are actually played with.

  <a href="staynaa.github.io" target="_blank">Click here to see for yourself!</a>
  
 Not only does Simology Report ask more questions for users to get accurate results, but it also helps players with filling in other aspects
  of their sims that they normally ignore and disregard completely. For example, walk styles and voice pitches. Many players pick at random from
  the options or just entirely pay them no attention, in the end hindering a form of connection the player should form with the sim. 

  Also the result provides the user with a world they should put their sims in, as well with a fashion aesthetic to guide players with choosing
  clothes and looks for their sims. There goes 10 hours of picking the right pair of pants. 
  </div>
  <h3>Documentaion and Code</h3>
  The project was made with HTML,CSS,JS/JSON/JQUERY
 
 <h5>Style Folder: Holds all the stylesheets used in the project.</h5>
  <li> home.css contains the style information of the navigation bar on the top of all the pages. All html files are linked to it.</li>
  <li> Normalize.css is a css tool in the form of a small file containing code that provides a better default styling for html pages 
    across browsers. The tool can be downloaded online from a creator or installed through npm. The file used in this project can be 
    found in the github pages link https://necolas.github.io/normalize.css/ All HTML files link to this file </li>
  <li>quiz.css formats the quiz page and is only used by quiz.html. </li>
  <li>report.css formats the report page and is only used by quiz.css</li>
  <li>style.css contains other styling information like fonts and page colors across all files.</li>

<h5>HTML Files</h5>
  <li> index.html is the main page of the site. Only allows the user to start the quiz, and is
linked to the quiz.html, history.html and the navigational bar’s option to view the
repository in github.</li>
  <li> quiz.html holds the quiz portion of the project. It first displays the option to select all of
the packs the user currently owns, and displays the quiz to the user. This file calls all the
javascript files within the project.</li>
  <li> history.html is the page that shows the user their saved information from local storage.</li>

<h5>Javascript and JSON files</h5>
  <li> Questions.js holds all the questions that the website asks the user. If more questions need
to be added, this is the file you must add to. It contains a json object called questions and
is organized with keys and values.</li>
  <li> Data.js contains paths of images (coming from the Sims images folder) in a string which
will be used by results.js. These are the images rendered and shown to the user in the
desktop viewport.</li>
  <li> quesFunc.js takes the checkmarked answers of the “Which packs do you own?” form and
organize all applicable questions into an array, which will be used to ask the player different questions with the help of randomized numbers as indexes to display array elements, which in turn keeps things spontaneous.
Also calls evaluate.js which analyzes the user’s answers. quesFunc sends evaluate the answer choice and the question index in the questions.js to then extract all answer information.</li>
  <li> evaluate.js analyzes the user’s answer and goes into questions.js to search for the answer and all it’s details (the aspiration, trait values, conflicts)
 When things are analyzed, it calls functions from result.js to store the answers values and change the user’s results accordingly.</li>
  <li> results.js contains map objects that represent aspirations, traits, careers, and other specific sims information. These details are keys while their values start at zero. As the user answers questions, the values will change based on the user’s answers and that is how things are calculated.
 12. This file contains many functions that calculate and organize the result data to display for the user. Also contained the function that stores information into the local storage if the user agrees to save the data. </li>

    All image folders contain images used in the website. All sims related pictures are owned by EA while logo images are personally created.
Throughout the javascript files, innerHTML is used to edit the html pages and their sections as needed based on when a function is called.
