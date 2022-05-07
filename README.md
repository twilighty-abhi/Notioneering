# Notioneering
A TinkerHub SHN project repo, based on the Notion API 


# Notion API displaying webpage

A website displaying the Notion DB and also accepting a daily journaling system
## Notion Setup

- Create a calendar database in Notion with a title, date, tags and description
- Create an integration
- Share your calendar with the integration

## Working
The webpage collects tasks that i have assigned or created in Notion and imports them on <br>
to the screen on pressing the **Get Tasks** button. <br>
We can Also add tasks in the webpage which will then **cross sync with Notion** , <br>
whilst reflecting and syncing event the current status of the **task**
The webpage also features a **Daily Journaling** Button which when clicked redirects to a **Google Form** <br>
where we can do the journal of the day by answering the questions.<br>


## ScreenShots

### Webpage view:
![Web view ](https://user-images.githubusercontent.com/79564956/167264402-e10f9784-77c8-4618-86be-690d4ede3dc2.png)

<br>
### Notion DB Preview:

![notion database](https://user-images.githubusercontent.com/79564956/167264333-b1080659-0ed9-4789-87fd-b3ab3020b352.png)
<br>

Link to the google form: https://forms.gle/98vBZzENc81iL7S89

<br>
<br>

Link to Notion Tasks DB: https://twilighty0abhi.notion.site/Notion-TO-DO-List-DB-3b67d622e2f24c6c899d49460654e034

## Future Updates:
* Will be adding a seperate Daily Journal page which displays journal of last 7 days by filtering the wholw database. <br>
* Will be adding in a pomodoro based timer for each task.
* Create a daily card which renders daily tasks done and congratulates the user.

## Usage

Add your notion secret token and the database id to the .env file 
```
npm install
npm start
```
### Created by:
Author: Twilighty Abhi <br>
Date: 07/05/2022 <br>
Ver: 0.03
