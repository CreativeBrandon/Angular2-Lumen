# Angular 2 + Lumen Starter Kit

This repository contains a startkit for an application running Angular 2 & Lumen. It's potentially a good starting point for your application and is configured to support both Mysql(default) & MongoDB. This starter kit was built on top of [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html) with the addition of Laravel's [Lumen Framework](https://github.com/laravel/lumen).

**This is not the perfect arrangement for your application. It exists primarily to get you started quickly.**

## Prerequisites

**Note:** It's recommend to use a package manager such as [Scoop | Windows](https://github.com/lukesampson/scoop) or [Brew | OSX](http://brew.sh/) to install these prerequisites.

`scoop install -g nodejs mongodb php mysql`

* `Node.js and npm` - [Installing Node.js](https://docs.npmjs.com/getting-started/installing-node)
* `MongoDB + mongo PHP driver` - [Mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) & [Mongo Driver](https://pecl.php.net/package/mongodb)
* `MySQL` -
* `PHP composer` - [Installing composer](https://getcomposer.org/doc/00-intro.md)

`composer global require "laravel/lumen-installer"`

**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.


## Create a new project based on the Starter Kit

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone https://github.com/CreativeBrandon/Angular2-Lumen  my-proj
cd my-proj
```

Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  // non-Windows
rd .git /S/Q // windows
```

### Create a new git repo

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```
> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`
The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.
