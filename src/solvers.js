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
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({n:n})

  const nRooksHelperFunction = function(n, r, c = 0) {
    if (r === n) {
      solutionCount++;
      return;
    }
    for (let c = 0; c < n; c++){
      board.togglePiece(r, c) 
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(r, c)
      } else {
        nRooksHelperFunction(n, r+1);
        board.togglePiece(r, c)
      }
    }
  }
  nRooksHelperFunction(n, 0)

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount
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
