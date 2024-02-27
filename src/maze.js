/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  const [row, col] = index;

  // Base cases
  if (
    row < 0 ||
    col < 0 ||
    row >= maze.length ||
    col >= maze[0].length ||
    maze[row][col] === "*"
  ) {
    return null; // Out of bounds or blocked passage
  }
  if (maze[row][col] === "e") {
    return ""; // Reached the exit
  }

  // Mark the current cell as visited
  maze[row][col] = "*";

  // Explore all possible directions
  const directions = ["R", "D", "L", "U"];
  for (const dir of directions) {
    let newPath = mazeSolver(maze, getNextPosition(index, dir));
    if (newPath !== null) {
      return dir + newPath;
    }
  }

  // If no valid path found, backtrack
  maze[row][col] = " "; // Unmark the cell
  return null;
}

// Helper function to get the next position based on direction
function getNextPosition([row, col], direction) {
  switch (direction) {
    case "R":
      return [row, col + 1];
    case "D":
      return [row + 1, col];
    case "L":
      return [row, col - 1];
    case "U":
      return [row - 1, col];
  }
}
module.exports = mazeSolver;
