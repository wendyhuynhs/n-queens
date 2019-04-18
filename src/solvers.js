/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let solution = new Board({n:n});
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      solution.togglePiece(r, c);
      if (solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()) {
        solution.togglePiece(r, c);
      }
    }
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution
  return solution.rows();

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, parent, r, c) {
  let solutionCount = 0; //fixme
  let newBoard = new Board({n:n});
  console.log(newBoard);
  newBoard.conflict = false;
  newBoard.children = [];
  newBoard.toggledPosition = [r,c];
  newBoard.parent = parent || null;
  if (newBoard.parent === null) {
    r = 0;
    c = 0;
  }

  newBoard.togglePiece(r, c);
  if (newBoard.hasAnyRowConflicts() || newBoard.hasAnyColConflicts()) {
    newBoard.conflict = true
  }
  if (newBoard.conflict === true) {
    return 0
  }
  if (newBoard.conflict === false) {
    let childRow = r;
    let childCol = c;
    while (childCol + 1 < n && childRow + 1 < n) {
      if (childCol + 1 < n) {
        childCol++
      } else {
        childRow++;
        childCol = 0;
      }
      let child = findNRooksSolution(n, newBoard, childRow, childCol);
      newBoard.children.push(child)
    }
    if (newBoard.children.length === 0) {
      return 1;
    }
    solutionCount += parseInt(newBoard.children.reduce((x,y) => x + y, 0));
    console.log(solutionCount, 'this is the solutioncount which is a', typeof solutionCount)

  }



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let solution = new Board({n:n});
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      solution.togglePiece(r, c);
      if (solution.hasAnyRowConflicts() || solution.hasAnyColConflicts() || solution.hasAnyMajorDiagonalConflicts() || solution.hasAnyMinorDiagonalConflicts()) {
        solution.togglePiece(r, c);
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
