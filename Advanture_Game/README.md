# Dungeon Adventure Console Game

This is a simple console-based dungeon adventure game written in TypeScript. The player will face various enemies and make choices to either defeat them or exit the dungeon. The game uses the `inquirer` library to interact with the player through the command line.

## How to Play

1. Install the required dependencies by running the following command in your terminal:

   ```
   npm install inquirer
   ```

2. Run the game by executing the TypeScript file:

   ```
   tsc adventureGame.ts node adventureGame.js
   ```

3. Follow the prompts and make choices to progress through the game.

## Gameplay

1. Upon starting the game, you will be welcomed to the dungeon.

2. You will encounter different enemies randomly chosen from a list of Skeleton, Zombie, Warrior, and Assassin.

3. During your encounter with an enemy:
   - You can choose to Attack, Drink a health potion, or Run.
   - Depending on your choice, you and the enemy will exchange damage.
   - If your health drops to zero or below, the game ends.

4. If you defeat an enemy:
   - You will gain loot in the form of health potions dropped by the enemy.
   - You can choose to continue fighting or exit the dungeon.

5. The game ends when you either:
   - Exit the dungeon successfully, or
   - Your health drops to zero or below.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): Used for user input and interaction.

## Acknowledgments

This game is inspired by a Java-based console game tutorial. The TypeScript version was adapted and developed using the `inquirer` library to provide a similar gaming experience through the command line.

Enjoy your adventure and have fun battling through the dungeon! 🗡🛡🏰

## MODIFIER

[Muneeb u Rehman]