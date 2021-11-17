# Candidate comments

The project should run exactly the same as the code provided, `npm install` and `npm start` will do.

I have completed the code challenge the best I could. However, I would like you to take in consideration that I've
only invested two days of work on it. There is so much that can be done and I never know when to stop, this is the 
reason I decided to give myself a deadline and complete as much as I could within that time frame. Hope this is enough 
to demonstrate what I am capable of doing.

I have left comments in some parts of the code where I would have done things differently for a real project. However, I 
would like to mention other things I would have done differently. To begin with, I would have used
`create-react-app` as a boiler plate and `ejected` when/if needed later on the project. Also, I didn't mind much cause 
I was working alone but things that are mandatory in all my projects are `ESlint` and `Prettier` at the very least, `husky`
or any pre-commit tool and a branching system (`git-flow`).

As I didn't have requirements, neither designs for this project, I couldn't plan it properly before starting; so I pretty 
much started coding right away. This is the reason why the CSS could be much improved. I would always create a styleguide from
the designs before start putting all together, and ideally something like `story-books` in place to avoid any duplication 
or styles misalignment.

Also, I didn't create any tests for the code. Cause of the time frame, the simplicity of the code and also the fact that I'm using
typescript, I decided to sacrifice them.

Finally, I've used Chrome to develop the application, where it works as expected. Tested it on Firefox and Safari, where (in Safari
only of course) I could see some minor design bugs that need a bit of work, but as it is only a code challenge I didn't worry much about it.

Please let me know any questions.


# EnjoyHQ Frontend Coding Challenge

Thank you for your interest in EnjoyHQ. This coding challenge consists of two
parts. We don't like puzzles and tricky questions, so we based all tasks on
real-life problems we had to solve when building EnjoyHQ.

## General rules

You should use React, Redux when needed and vanilla CSS (no bootstrap). Typescript is not mandatory so it's up to you to decide to use it or not.

Please don't make use of any other libraries or frameworks beside React and Redux (libraries, addons, and tools related to Redux are allowed ie: redux-logger).

We've added some very basic CSS theme. Feel free to use/modify or implement your own theme.

Once your solution is complete, please make sure to:

- document how to get everything running
- zip the whole project directory, including `.git`, we're curious about your commit history
- email it to us

If you have doubts or something is not clear - do not hesitate to ask!

## Instructions

We have prepared a basic FE boilerplate, that will compile Typescript if needed. Feel free to use/modify it and implement on top of it.
After `npm install` just run `npm start` to run the app. You can access WebPack's dev server at

http://localhost:8080

## Task

Consume [The Guardian API](https://open-platform.theguardian.com/documentation/) to build a simple news SPA. Users should be able to:

- Search news and navigate through pages
- Filter news by date and optionally by section
- Sort news by: newest, oldest or relevance

Each news item must contain: title, date, section name, thumbnail and anything else you think it would be usefull for users.

We also want to be able to store a user's previous searches (it should include selected query and filters) and display them in our application.

---

Good luck!
