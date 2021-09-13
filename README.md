# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

I created a calculator that compiles information that is typed in and puts it on a table. It takes in values for First Name, Last Name, ID Number, Title, and Annual Salary. I assigned them IDs within html and used JQuery to manipulate these IDS. I created an empty array and an object within a function. I pushed the input information into the empty array and targeted the #body id to append the information on the dom. Next I created a calculator that collects the information put into annual salary and divides it by 12. To do this, I created for loop to loop through the employees array. I also needed to convert the values for annual salary into a number. Once all of this is done, it adds the values together and appends them to the DOM. If the value is larger than 20000 then I made an if statement to make its background red. Last I created a function for a button that deletes a targeted row. I used "this" to target the closest row and deleted it. I used the videos to help me, but I still don't fully understand "this." Afterwards, within the first function I made sure to empty the text boxes by targetting their ids and replacing their values with ''. I also created an alert within the first function that will check to make sure there are no empty inputs. It involved creating a boolean and setting it to false. I then created a for in loop to loop through the object containing text input. If it finds anything blank then the boolean switchs to true. Afterwards I created an if else if statement. If a textbox is empty and the boolean is true then an alert pops up. If every text box has an input then it appends the input on the DOM. I had help from the cohort for this.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
