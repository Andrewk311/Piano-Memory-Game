# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andrew King**

Time spent: **15** hours spent in total

Link to project: https://glitch.com/edit/#!/memorygame-andrewking?path=README.md%3A43%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Option to choose how many rounds of the game are played before winning

## Video Walkthrough

Here's a walkthrough of implemented user stories:

##### Default settings with correct playthrough
![Full game](https://i.imgur.com/9RmKzEq.gif)

##### Allows for three mistakes before failure
![Losing after three mistakes](https://i.imgur.com/pBWQOD6.gif)

##### Game ends if the user does not guess within a certain timeframe
![Losing after the timer runs out](https://i.imgur.com/YsLYrKt.gif)

##### Allows for variable amount of rounds based on user input
![Changing the number of rounds needed to win](https://i.imgur.com/sSWkKlb.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick

https://www.w3schools.com/tags/tag_progress.asp

https://www.w3schools.com/js/js_timing.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered in creating this submission was with the creation of the timer. It was a very tricky task, especially without a good understanding of JavaScript and html. In order to overcome this, I started by researching the setInterval and clearInterval methods like suggested. After learning how these two worked, my next task was figuring out what to use for a timer and how to actually implement these methods. This is when I came across the progress tag in html to create a progress bar. I learned how to create a timer with the progress bar by manipulating the value in every interval of setInterval, which I set to 1 second. To create the timing effect, I set the value of the progress bar to 10 subtracted by a variable called timeLeft, which is automatically set to 10 every time a new sequence is played. In each iteration of setInterval the value of timeLeft is subtracted by 1, making it appear as if it is a 10 second timer. When timeLeft reaches 0, clearInterval calls the setInterval method, stopping it and subsequently losing the game as the timer ran out. This is probably the part of the project that consumed the most time as I had toto teach myself exactly how to do it after starting with limited knowledge of the subject. Due to this being the most challenging part of the project, it was also the most fulfilling when it finally started working, and it fueled my ambition to complete the many other parts.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Some questions I have about web development are in regards to UI/UX design. This first one is, how do you deal with optimization for different screen sizes and web browsers? I have this question because as I worked on the memory game, I realized the positioning would change as I changed the size of the screen. I also realized that some features like moving some elements in CSS would not work in different browsers like Firefox and Chrome. Another question I have has to do with accessibility issues of a website. How can a website be optimized to cater to the visually impaired community?  I am interested in this because UI/UX designers must find a way to make the website structure easy to follow for the non-visually impaired, while also adding elements that assistant with the visually impaired, like being able to adjust text size or finding a way for people with color blindness to detect hyperlinks since they are usually colored differently from the rest of the text. I am curious to learn how web developers deal with these types of issues. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had a few more hours to work on this project I would add many new features, such as a song playback option for the piano, more buttons, and keyboard functionality. Instead of just using random sequences, a song playback option would be a fun and interactive way to continue playing the game. It would feature a dropdown menu with all the available songs that users can choose from. When a song is chosen it would play out like the normal memory game, but instead of being randomized it would be preset to create the song. Not only would this serve as a memory game, it can also be used to practice pitch and learn how to play the piano! This would help someone practice pitch because they would hear the actual piano note that goes with each key when the light flashes showing it, which would eventually start being retained by the user. I would also add more piano keys/buttons in order to cover a wider range of octaves to make the game more challenging and satisfying to play. The final thing I would add to the piano memory game would be keyboard functionality since the more buttons that are added, the harder it is the use the mouse when it speeds up. I chose this design because it combined my two passions of music and computer science, and I will definitely add more to it in the future! 



## License

    Copyright [Andrew King]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
