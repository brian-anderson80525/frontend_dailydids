# Project 4 - Daily Dids (D2)
#### By Brian Anderson

## Project Summary

I'm building a daily did app - that is a tracker for what i did to keep growing per Alex's markdown.  It will incorporate all 7 restful routes.  My goals for this app are
1. Responsive 
2. Track what was done
3. Keep me growing/learning in my coding journey

## Models

I believe there will be just one.  Although I would like to add one or two more once i achieve MVP.

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /list | get | get all "dids" (index)|
| /list/:id | get | get a particular did (show)|
| /list/new | get | show "add new" did form  (new)|
| /list | post | add the new did to database (create)|
| /list /:id/edit| get | show form to edit existing did  (edit)|
| /list/:id | put | change database to update did (update)|
| /list/:id | delete | remove the did from database (destroy)|

## User Stories
Our user is someone who aspires to be Alex Merced...but isn't there yet. Our user needs to follow AM's advice and continue to put in the 8 hours a day to get there.  Our user will:
- add did's to the list as necessary
- add or edit did's/hours if desired
- delete did as they want
- see all the done/dids to make sure they are on track to be Alex Merced.
## Challenges
https://www.youtube.com/watch?v=9DwGahSqcEc
## List of Technologies
- Python
- css
- Masonite
- React
- Postgres
- JS