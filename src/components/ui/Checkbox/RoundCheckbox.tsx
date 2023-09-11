import style from "./RoundCheckbox.module.scss";
import CheckIcon from "@mui/icons-material/Check";

import { FC } from "react";

interface Props {
  checked: boolean;
  onChange?: () => void;
}

export const RoundCheckbox: FC<Props> = ({ checked, onChange }) => {
  return (
    <div onClick={onChange} className={style.Checkbox}>
      {checked ? (
        <div className={style.checked}>
          <CheckIcon className={style.icon} />
        </div>
      ) : (
        <div className={style.notchecked}></div>
      )}
    </div>
  );
};
