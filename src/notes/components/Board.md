The board component uses

interfaces:

1.  Props
2.  CurrentBoard, which holds CellOptions that is a 2D array. What is a 2D array? is a collection of data elements arranged in a grid-like structure with rows and columns. Each element in the array is referred to as cell and can be accessed by its row and column indices/indexes

- Articles for 2D arrays:
  - JS:
  1. https://www.freecodecamp.org/news/javascript-2d-arrays/#:~:text=A%20two%2Ddimensional%20array%2C%20also,row%20and%20column%20indices%2Findexes.
  2. https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/
  - C: https://www.w3schools.com/c/c_arrays_multi.php
  - Unknown: https://www.cs.cmu.edu/~mrmiller/15-110/Handouts/arrays2D.pdf
  -

Enums:

1. Blocks: There are seven different types of block in tetris, we will create an variables for each block, we can store this variables inside of an enum.

2. EmptyCell: There are potential empty cells

Types:

1. CellOptions: Eache cell can be either a block or an empty cell.

2. BoardShape: Will be a 2D array of the CellOptions type.

The Board component itself returns a div that where we do a nested map where in the frist map we create a row and then map throught the row and create a cell for each value
