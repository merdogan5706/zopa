# React-Native Coding Challenge - Zopa

Congratulations! You're here because you've made it through to the next step of your Zopa interview.

We'd like to ask you to complete this coding challenge, so you can showcase your creative problem-solving and technical ability.

We hope you'll enjoy it. It should take around **4 hours**, give or take. We're happy to look at partial solutions too.

We're on the lookout for best practices and evidence that you understand the technology.

## The background

Your challenge is to create a mobile application for iOS and Android that helps you send money to friends.

At the top of the screen, you have a form to enter the recipient's details.
At the bottom, you have the list of transactions you've made so far.

The user fills in the form with the recipient's details, name, email and the amount they'd like to transfer. The fields must have strong validation. When a field is not valid, an inline error message is displayed under the field.

Pressing the "Send" button will add a transaction to the list, given all the fields are valid. A temporary success message should also show at the top of the screen for a few seconds.

## Getting started

To get you started faster, we provide you with a project bootstrapped with Expo. You can [learn more about Expo here](https://docs.expo.io/get-started/create-a-new-app/). The project is TypeScript ready. However, if you're not comfortable writing code in TypeScript, you can still use regular JavaScript files.

A few useful commands:
```
- yarn # to install the project
- yarn start # you can open iOS or Android from there
- yarn android
- yarn ios
```

We also provide you with a list of components, those are simplified versions of our existing components here at Zopa. They are written in TypeScript.

## Your task

- Build the screen so it follows the guidelines from the supplied design (available in the design folder)
- Implement the logic as described above.
- Ensure the application works on both iOS and Android devices.
- Provide unit tests to validate your solution.

Bonus points (optional, only if you have time to spare):
- To make this challenge more realistic, you can submit the form to an API server and add the transaction when you get a valid response. You can use something like [json-server](https://github.com/typicode/json-server) to create a quick javascript server or even a Firebase Realtime Database.
- To improve the user experience, you can separate the form and the transaction list in 2 separate screens. You can decide to implement a navigation library or use a modal.

## Suggested libraries and tools

- [typescript](https://github.com/Microsoft/TypeScript): Strong types make your code more reliable when you work in larger teams.
- [firebase](https://firebase.google.com/products/firestore): Cloud database to store and sync data
- [jest](https://jestjs.io/): JavaScript Testing Framework with a focus on simplicity
