kibble - brain food for kittens
======

Tutorials, presentations and what-nots.

##Read this first

Working with the Kibble repository won't be the same as with litterbox. You don't have an access to directly push your changes to kibble.
It's not that we don't like you anymore -- we do! -- we just want to make you comfortable with a differend kind of **workflow**.

Suggested reading: [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html)

##Set up your kibble
It's really simple. Ok, maybe it's not **that** simple, but you can do it.

###First time only - fork and clone the kibble

1. Fork this repository (repo) by clicking the Fork button (hint: opposite of the repo's name)
2. Copy the clone url of your repo (you can find it in the right sidebar)
3. Open a terminal, move to the folder with your projects (let's keep your work organized) and clone the repo.

 ```
 git clone <URL TO YOUR REPOSITORY>
 ```
 Make sure **you clone your own forked repository**, not this one.

4. Go to the kibble folder (it's created by cloning) and list all remotes linked to you forked repository:
 ```
 git remote -v
 ```
 You should see something like this:
 ```
 origin  https://github.com/<YOUR USERNAME>/kibble.git (fetch)
 origin  https://github.com/<YOUR USERNAME>/kibble.git (push)
 ``

You are all set and can go prepare materials for your presentation/tutorial. Check next section on where to put your materials.

###Any other time: preparing new kibble materials and sharing it with others

1. open your terminal, move to the kibble folder
2. create a new branch and move onto it
```
git branch <my-awesome-branch>
git checkout <my-awesome-branch>
```
2. check if **topic folder** exists (e.g. jQuery, JSON, Git,…), if not **create it**
3. inside the topic folder create a **new folder** for your presentation in following format **year-month-day-keywords** (see example below)
4. put your files in the folder you've created
5. create/edit README.md in the topic folder and add a short description about your kibble
5. commit and push to **your** forked repository
6. create a pull request by clicking on `Compare & pull request` from your awesome branch onto `CodeCatz:master`

Example of directory structure:
```
/kibble
 /jQuery
  /2013-08-28-jquery-basics
 /php
  /2013-09-04-php-forms
 …
```

##Weekly presentations
Every week we'll have a short presentation (or more) on something we want to learn about: a functionality, library, tips and tricks,…

###kibble 21.08.2013
- [x] [@pijab](https://github.com/pijab): complicator
- [x] [@ialja](https://github.com/ialja): complicator - validating user input in forms

###kibble 28.8.2013
- [x] [@ashocka](https://github.com/ashocka): introduction to jQuery
- [x] [@sparkica](https://github.com/sparkica): form validation with jQuery

###kibble 04.09.2013
- [x] [@lumeaa](https://github.com/lumeaa): basics of UX

###kibble 11.09.2013
- [x] [@betmenka](https://github.com/betmenka): RMA

###kibble 18.09.2013
- [x] [@ialja](https://github.com/ialja): static website generators and GitHub pages

###kibble 23.10.2013
- [ ] [@mrfoto](https://github.com/mrfoto): Git Branches
- [ ] [@goranche](https://github.com/goranche): Node.js and JSON
- [ ] [@sparkica](https://github.com/sparkica): Python and JSON

#Required reading
- [Syncing a fork](https://help.github.com/articles/syncing-a-fork)
