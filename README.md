# Description

This application is a flash card simulator. In the code itself you can create objects that are cards to test yourself. By default the program runs with 30 cards about JavaScript. However if you can and want to, you can customize your own cards. When the game is completed it will tell you your score. Use the arrow keys to choose your answer then press enter to select your answer. Press enter again to show the next question

![LookOfGame](https://user-images.githubusercontent.com/56371796/73486907-3a783080-4363-11ea-9680-ddd7105b2311.png)


# Install instructions

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your game "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```
### To play your game type node index.js
