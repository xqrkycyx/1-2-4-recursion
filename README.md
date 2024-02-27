# Recurion problem 1 of 2: Power calculator

In this challenge, you will solve several algorithmic problems using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.

> *Note: If downloading the assessment files to your local machine, make sure you're running Node v18 before you run* `npm install`.
>
> 1.  *Check which version you are running:* `node -v`
> 2.  *If needed, change the version to v18:* `nvm use v18`
>
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Existing files

| File                      | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `__tests__/power.test.js` | Contains tests for the power problem. You are welcome to look at this file, but do not modify it. |
| `src/power.js`            | Write your solutions to the power problem in this file.                                           |

## Power calculator

Given two integers `a` and `b` where `b` is not negative, then `a` raised to the power `b` is `a` multiplied by itself `b` times. `a` is called the *base* and `b` is called the *exponent*.

For example, 2 raised to the power 3 is `2 * 2 * 2 = 8`. And 3 raised to the power 5 is `3 * 3 * 3 * 3 * 3 = 243`.

Any number raised to the power 0 is 1.

Write a function called `power()` that takes two parameters, an integer as a base, and a non-negative integer as an exponent. The function returns the value of the base raised to the power of the exponent.

If the exponent is negative, throw an Error with the message `exponent should be >= 0`.

- `power(10,2)` should return `100`.
- `power(10,-2)` throw Error `exponent should be >= 0`.

# Recurion problem 1 of 2: Maze

============================================

In this challenge, you will solve a problem using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.

> *Note: If downloading the assessment files to your local machine, make sure you're running Node v18 before you run* `npm install`.
>
> 1.  *Check which version you are running:* `node -v`
> 2.  *If needed, change the version to v18:* `nvm use v18`
>
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Existing files

| File                     | Description                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| `__tests__/maze.test.js` | Contains tests for the maze problem. You are welcome to look at this file, but do not modify it. |
| `src/maze.js`            | Write your solutions to the maze problem in this file.                                           |

## Find a way out of the maze

You have entered a maze and need to find your way out of it. There is more than one possible path through the maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

You can use the following mazes to test your program.

```
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

```

The maze is represented as an N x M matrix (in the above case, a 3x3 or a 5x7 array). The starting point is the top-left corner, and the exit is indicated by `e`. You can't go outside the boundaries of the maze. The maze has passages that are blocked, and you can't go through them. These blocked passages are indicated by `*`. Passing through a blocked cell as well as passing through a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be `RRDDLLDDRRRRRR`.

Write a function that accepts a two-dimensional array for the maze and an array with two values for the current position in the maze. For example, you may call the function like this: `mazeSolver(maze, [0, 0])` to indicate that the starting position is at the top-left corner.
