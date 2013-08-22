kibble - brain food for kittens
======

Tutorials, presentations and what-nots.

##Read this first

Working with the Kibble repository won't be the same as with litterbox. You don't have an access to directly push your changes to kibble. 
It's not that we don't like you anymore -- we do! -- we just want to show you and make you comfortable with a differend kind of *workflow*.

Suggested reading: [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html)

##Set up your kibble
It's really simple. Ok, maybe it's that simple, but you can do it.


###First time only - fork and clone the kibble

1. Fork this repository (repo) by clicking the Fork button (hint: opposite of the repo's name)
2. Copy the clone url of your repo (you can find it in the right sidebar)
3. Open a terminal, move to the folder with your projects (let's keep your work organized) and clone the repo.

 ```
 git clone <URL TO YOUR REPOSITORY>
 ``` 
 Make sure *you clone your own forked repository*, not this one.

4. Go to the kibble folder (it's created by cloning) and list all remotes linked to you forked repository:
 ```
 git remote -v
 ``` 
 You should see only something like this:
 ````
 origin  https://github.com/<YOUR USERNAME>/kibble.git (fetch)
 origin  https://github.com/<YOUR USERNAME>/kibble.git (push)
 ```

5. Add a remote for this CodeCatz kibble by typing:
 ````
 git remote add upstream https://github.com/CodeCatz/kibble.git
 ```
 This will add a link with a name upstream to the original repo you forked from.
6. Verify new remote:
 ````
 git remote -v
 ```
 You should see additional two rows:
 ````
 origin  https://github.com/<YOUR USERNAME>/kibble.git (fetch)
 origin  https://github.com/<YOUR USERNAME>/kibble.git (push)
 upstream  https://github.com/CodeCatz/kibble.git (fetch)
 upstream  https://github.com/CodeCatz/kibble.git (push)
 ```

You are all set and can go prepare materials for your presentation/tutorial. Check next section on where to put your materials.


###Any other time: preparing new kibble materials and sharing it with others

1. Open a terminal, move to the kibble folder
2. check if *topic folder* exists (e.g. jQuery, php, django), if not *create it*
3. inside the topic folder create a _new folder_ for your presentation in following format _year-month-day-keywords_ (see example below)
4. put your files in the folder you created
5. create/edit readme.md in the topic folder and add a short description about your kibble
5. commit and push to *your* forked repository
6. create a pull request to push to this repository
 
Example of directory structure:
```
/kibble
 /jQuery
  /2013-08-28-jquery-basics
 /php
  /2013-09-04-php-forms
 ...
```  

##Weekly presentations
Every week we'll have a short presentation (or more) on something we want to learn about: a functionality, library, tips and tricks...

###kibble 21.08.2013
- [x] [@pijab](https://github.com/pijab): complicator
- [x] [@ialja](https://github.com/ialja): complicator - validating user input in forms

###kibble 28.8.2013
- [ ] [@ashocka](https://github.com/ashocka): introduction to jQuery
- [ ] [@sparkica](https://github.com/sparkica): form validation with jQuery


#Required reading
- [Syncing a fork](https://help.github.com/articles/syncing-a-fork)
