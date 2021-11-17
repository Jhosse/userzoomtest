import React, {
  ReactElement,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react";

import "./styles.css";

const DATE_FROM_LABEL = "Select news from:";
const DATE_TO_LABEL = "Select news to:";

export enum DateFilterType {
  DateFrom = "from-date",
  DateTo = "to-date",
};

interface DateFilterProps {
  filterType: DateFilterType;
  setValue: Dispatch<SetStateAction<string>>;
}

export default ({
  filterType,
  setValue,
}: DateFilterProps): ReactElement => {
  const labelText = filterType === DateFilterType.DateFrom ? DATE_FROM_LABEL : DATE_TO_LABEL;

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement
  > = ({ target }) => {
    /**
     * - The date should be validated before hand
     * - and an error message for the user should
     * - be shown.
     */
    setValue(target.value);
  };

  return (
    <div>
      <label
        className="display-block"
        htmlFor={filterType}
      >
        {labelText}
      </label>

      {/**
       * - Date pickers are quite tricky, specially styling
       * - them properly and across different browsers, that 
       * - requires a lot of time or the use of a library.
      */}
      <input
        id={filterType}
        className="date-input-field display-block"
        type="date"
        onChange={handleInputChange}
      />
    </div>
  );
};