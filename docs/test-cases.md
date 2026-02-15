###TC-01: Correct Answer Feedback Display

Precondition:
User is viewing a question image
Two answer buttons are visible: HUMAN DRAWING and AI DRAWING

Steps:
1.User clicks one answer button (Human or AI)

Expected Result:
-System immediately displays result text:
 "Correct" if the selected answer matches the image type
 "Incorrect" if it does not
-System displays an explicit explanation text, e.g.:
 "This image was AI-generated" or
 "This image was drawn by a human"
-The question image is replaced by the reveal view
-Answer buttons are no longer interactive (cannot be clicked again)
-A NEXT button is displayed to proceed to the next question
