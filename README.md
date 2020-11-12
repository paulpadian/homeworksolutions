# homeworksolutions
-   Name of App: "Homework Solutions" - Not final name
-   Name: Paul Padian
-   Tech utilization: Vue/Typescript/Express/PSQL

1.  How do you plan on learning/implementing this new technology?
	-I plan to look at documentation for VUE, I want to write with typescript in vue because they 			interact well together. I plan to implement a psql/express backend with the app and integrate them with vue.
2.  What is your goal with this project?
	- Presentation/5 day goal: 
		- implement a student and teacher class of user
		-  students can submit homework by a linked url -
		- Teachers can comment on the submission (maybe view in app) with a grade or ask for resubmit etc. 
		- Teachers can post assignments. 
		- Students and teachers can view all assignments. 
		- Implement decent user experience on student side to make app utilizable.

	- Extended goal -Students can receive submission of comments with markdowns displayed inline w/highlighting and basic text editing. implement greater level of security, look into RUBY backend in final version. Test application in actual school setting w/ family members.
	
3.  Who is the user for your app?
	-	teachers and students w/ 2 different portals/flows

4.  Any potential roadblocks you think you might run into?
	-Document rendering and upload with markdown could be hard but I've been looking into preview components for VUE and trying to work with that. Could end up being text only input if scaled down but allow inline comments.

![ER diagram of students/teachers/assignments/submissions/classes](https://i.imgur.com/E4FCXHm.png)

## Teacher Flow
| Route| Description |
|--|--|
| / | Splash Page
| /signin | Sign in as teacher (Admin)
| /profile | display assignments for current admin, link to assignment creation |
|/new-assignment|assignment creation form|
|/assignments|All assignments page from all instructors|
| /assignment:id | show individual assignment with show all submissions on cards |
| /submission:id| show individual submissions, post a grade with comment|

![Teacher Profile](https://i.imgur.com/GLyHgEk.png)
![class view](https://i.imgur.com/xiznP83.png)

## Student Flow
| Route| Description |
|--|--|
| / | Splash Page
|/signIn|sign in as student|
| /profile | display basic info, link to all assignments page, show all submissions from user, link to individual submission|
|/submission:id|Show submitted Homework with grade/comment at top if posted|
|/assigments|show all assignments by all instructors|
| /assignment:id | show individual assignment with title, link to submission page |
| /submit| student submission page |
  
![student profile](https://i.imgur.com/Nozgu7r.png)![individual class view w/submission](https://i.imgur.com/vtkjobT.png)![submission view](https://i.imgur.com/8sIVsZd.png)

## Trello
[Trello Link Here](https://trello.com/b/DHuqyNsA/p4-planning)
