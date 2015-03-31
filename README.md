# acculynx
Acculynx Coding Challenge

http://andrewmcconville.com/acculynx/stackoverflow

Overall Goal
Create a website that consumes the Stackoverflow.com API for recent question activity and display information about them.

We expect this to take about 5-8 hours. Please send us whatever you have completed after 1 week. You do not need to have all requirements completed.
Stackoverflow API
https://api.stackexchange.com/docs/questions
Possible Api Calls Needed:
https://api.stackexchange.com/2.1/questions?order=desc&sort=activity&site=stackoverflow
https://api.stackexchange.com/docs/badges-on-users

Things to note
The results of the url above is JSON and will contain different data almost every time it’s requested
Be warned: the URL above is rate limited and will shut you off after a certain amount of requests in a time period. (Hint: look at "quota_remaining” in the request) You shouldn’t run into the quota limit, but just be aware of it. 
Implement this as a website in any programming language you want but must have instructions on how to run if not a Asp.net Web Application.
You can consume the JSON results however you want (JavaScript, C#, etc.) but must display the desired requirements below.
Design will not be judged, but we do expect clean, semantic markup and well organized CSS (if any).

Requirements
From the Recent Questions:
Display the title of the question with the highest score
Display the sum of the reputation for all users in that request
Display a list of all the Recent Questions. Show:
The user who asked the question
Gravatar
Most recent badge
Number of badges the user had 6 months ago
Display the badge totals grouped by rank
Title
Link to the actual stackoverflow question
Number of answers submitted
Total score

Upload your solution to a public repository on github.com and send us the link.

Bonus: Use git from the beginning to have a full commit history