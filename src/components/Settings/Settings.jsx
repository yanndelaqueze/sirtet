import s from "./style.module.css";

export function Settings({
  onClickAdd,
  onClickRemove,
  rows,
  columns,
  onClickReset,
  onClickColorMode,
  onClickDarkMode,
  darkMode,
  onClickIncreaseStartLevel,
  onClickDecreaseStartLevel,
  onClickResetStartLevel,
  startLevel,
}) {
  return (
    <>
      <h1>GAME SETTINGS</h1>
      <div className={s.container}>
        <div className={s.board_size}>
          <h2 className={s.settings_title}>Board Size</h2>
          <div className={s.size_adjust}>
            <div className={s.remove} onClick={onClickRemove}>
              -
            </div>
            <div className={s.size}>
              {rows} x {columns}
            </div>
            <div className={s.add} onClick={onClickAdd}>
              +
            </div>
          </div>
          <div className={s.reset} onClick={onClickReset}>
            <h5>Reset</h5>
          </div>
        </div>
        <div className={s.mode}>
          <h2 className={s.settings_title}>Color Mode</h2>
          <div className={s.mode_switch}>
            {darkMode && <h4>→</h4>}
            <h4 onClick={onClickColorMode}>Dark</h4>
          </div>
          <div className={s.mode_switch}>
            {!darkMode && <h4>→</h4>}
            <h4 onClick={onClickDarkMode}>Color</h4>
          </div>
        </div>

        <div className={s.reverse}>
          <h2 className={s.settings_title}>Reverse Mode</h2>
          <h5 className={s.coming_soon}>(coming soon)</h5>
          <div className={s.mode_switch}>
            <h4>ON</h4>
          </div>
          <div className={s.mode_switch}>
            <h4>→</h4>
            <h4>OFF</h4>
          </div>
        </div>

        <div className={s.level}>
          <h2 className={s.settings_title}>Start Level</h2>
          <div className={s.level_adjust}>
            <div className={s.add_level} onClick={onClickDecreaseStartLevel}>
              -
            </div>
            <div className={s.current_level}>{startLevel}</div>
            <div className={s.add_level} onClick={onClickIncreaseStartLevel}>
              +
            </div>
          </div>
          <div className={s.reset_level} onClick={onClickResetStartLevel}>
            <h5>Reset</h5>
          </div>
        </div>
      </div>
    </>
  );
}
