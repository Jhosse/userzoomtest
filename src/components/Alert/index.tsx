import React, {
  useEffect,
  ReactElement,
  FunctionComponent
} from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { errorAlert, setErrorAlertReset } from "../../store/errorAlertSlice";

import "./styles.css";

const AUTO_HIDE_DURATION = 2000;

const Icon: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="alert-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={"#D82A05"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
  );
};


export default (): ReactElement => {
  const dispatch = useAppDispatch();
  const errorAlertFromStore = useAppSelector(errorAlert);

  /**
   * - Probably not the most intelligent way to handle this,
   * - I've always used libraries for it. This is a quick 
   * - approach to make sure the user gets a visual notification
   * - if the API fails.
   */
  useEffect(() => {
    if(errorAlertFromStore) {
      setTimeout(() => {
        dispatch(setErrorAlertReset());
      }, AUTO_HIDE_DURATION);
    }
  }, [errorAlertFromStore]);

  return (
    <div className={`alert-container ${errorAlertFromStore ? "open" : ""}`}>
      <Icon />
      <p className="alert-content">{errorAlertFromStore}</p>
    </div>
  );
};
