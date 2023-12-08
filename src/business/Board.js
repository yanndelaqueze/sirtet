import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export function buildBoard({ rows, columns }) {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
}

export function nextBoard({ board, player, resetPlayer, addLinesCleared }) {
  const { tetromino, position } = player;

  // Copy and clear spaces used by pieces that
  // hadn't collided and occupied spaces permanently

  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position: position,
    rows: rows,
    shape: tetromino.shape,
  });

  // Return the next board
  return {
    rows,
    size: { ...board.size },
  };
}