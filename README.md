# 🚀  javascript-starter-boilerplate
A `javascript` boilerplate for generating new projects.


This `javascript` boilerplate uses:

- [npm](https://www.npmjs.com/get-npm) - node package manager
- [eslint](https://eslint.org/) - linter
- [jest](https://facebook.github.io/jest/) - testing library
- [scaffold-generator](https://github.com/kaelzhang/node-scaffold-generator) - new repo generator


## scaffolding
This package can be used as the base for a new `javascript` project.

```
$ cd <javascript-starter-boilerplate>
$ yarn install

## configure...
$ vi scaffold/config.js

## generate new repo...
$ babel-node scaffold
```

## create as git repo
With the new project in place, intialise the project as a git repo:

```
$ cd <my-new-repo>
```

Follow the github instruction on [adding an existing project to github](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
