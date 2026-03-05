TC-01: User can start the game

Test Case ID: TC-01
Title: User should be able to start the game from Home page

Pre-condition:
User opens the website

Steps:

 1.Open website

 2.Click “Start” button

Expected Result:

 System navigates to stage selection or first game screen

 Game UI is displayed correctly

 No error message appears

Status: Not executed

TC-02: Question Loads Correctly

Title: Display 5 questions and show progress bar “Warm-up · 1 / 5”

Pre-condition:

The user has started the Warm-up mode

Image data is loaded successfully

currentIndex = 0

Steps:

The system displays the first image.

The system displays the progress bar.

The user sees two answer buttons (AI / Human).

Expected Result:

Only one image is displayed.

Two answer buttons are visible (AI and Human).

The progress bar shows “Warm-up · 1 / 5”.

The End of Exhibition screen is not visible.

TC-03: Score Calculation

Title: Calculate score based on the user's answer

Pre-condition:

The user is currently viewing a question.

Answer buttons are active.

The score variable has been initialized.

Steps:

The user selects an answer (AI or Human).

The system checks the answer.

The system displays whether the answer is correct or incorrect.

Expected Result:

If the answer is correct → score increases by 1.

If the answer is incorrect → score does not change.

Answer buttons become disabled after selection.

The correct answer and explanation are displayed.

The next image is not loaded immediately.

TC-04: Stage Transition

Title: Display the summary result after completing the stage

Pre-condition:

The user has answered all 5 questions.

currentIndex === totalQuestions

Steps:

The system calls the stage completion function (e.g., endExhibition()).

The system hides the question interface.

The system displays the summary screen.

The user clicks Next Stage.

Expected Result:

The message “End of Exhibition” is displayed.

The final score is shown (e.g., “You identified 3 out of 5 correctly”).

Two buttons are displayed:

Back to Main Menu

Next Stage

When the user selects Next Stage:

score resets to 0

currentIndex resets to 0

A new set of questions is loaded

The End of Exhibition screen is hidden
