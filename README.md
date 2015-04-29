# Pluggable Component to call and message using Plivo API

## Problem Statement

A pluggable component that can be used in any web app built using Express framework which will do the following when an error occurs (or exception thrown) in any part of the application:

1. If the pluggable component is configured with SMS, it should send an SMS to a pre-specified phone number with the error text (< 160chars).


2. If the pluggable component is configured with Call, it should make a phone call to a pre-specified phone number and say the error message when the call is picked up by the person.

## How do I get started?


```sh
git clone https://github.com/sasgarBoraiah/Plivo
```

## How to run this?

```sh
~/node app.js
Point your browser to http://localhost:4731
```
## What's the project structure?

1. app.js: The main project file.
1. config.json: Contains the API access tokens
1. node_modules: Contain the node module dependencies
1. npm-debug.log: Debug log information
1. package.json: An Updated json file required as a dependency for Express framework.

## Prerequisites

1. **ExpressJS**: Express is a Node.js web application framework that provides a robust set of features for web and mobile applications.
To install Express first update your package.json file and run the npm installation.

Installation
---------------
Installing using npm (node package manager):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install -g express
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 Install dependencies:

    $ npm install

 Start the server:

    $ node app


1. **plivo-node**: It is a Node.js helper can be used to make REST API calls and can also be used to control incoming calls and messages.

Installation
---------------
Installing using npm (node package manager):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install plivo-node
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


## How did I build the project?

The main task of this project is to trigger a outbound sms/call to a pre-specified phone number.

1. To make a call set a flag as 1 else 0 for sms

```sh

if(!flag)
{
	var params = {
    'src': '+919620788167',
    'dst' : '+919945247441', // User Number to Call
    'text' : "Hi, message from Plivo",
    'type' : "sms",
};
}

if(flag)
{
	var params = {};
	params.from = "+919620788167";
	params.to = "+919900970842";
	params.answer_url = "http://frozen-savannah-9731.herokuapp.com/response/speak/";
}

```
1. 	This url points to a xml document which shows the action to be performed when the user lifts the call

```sh

params.answer_url = "http://frozen-savannah-9731.herokuapp.com/response/speak/";

```
