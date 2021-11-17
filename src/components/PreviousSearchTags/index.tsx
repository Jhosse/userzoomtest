import React, {
  ReactElement,
  MouseEvent,
} from "react";
import { useAppSelector } from "../../store/hooks";
import { previousSearches } from "../../store/previousSearchesSlice";

import "./styles.css";

export default (): ReactElement => {
  const previousSearchesFromStore = useAppSelector(previousSearches);

  if (!previousSearchesFromStore.length) return <></>;

  return (
    <section className="recent-search-container">
      <h1 className="recent-search-title">Recent searches:</h1>
      {/**
       * - This code won't look for existing previousSearches,
       * - not sure about requirements. Most likely we wouldn't
       * - like to show them but there is a chance we would.
       * - ie: to let the user know visually the most searched 
       * - combination or term (even instead of repeating it,
       * - increase the size of it instead).
       */}
      {previousSearchesFromStore.map((search) => {
        const values = [];
        for (const [key, value] of Object.entries(search)) {
          values.push(value);
        }
        const valuesToString = values.toString();

        /**
          * - The data is only presented is a way it wont be really helpful.
          * - I would need requirements to find out if we only want to present
          * - the search keys or we wont the user to interact with them
          * - (ie: click on them to call again the API with that search),
          * - or if we want to add the keys for the values, right now it wont be 
          * - possible to now if Date is dateFrom or dateTo, ...
        */
        return (
          <p
            key={`${valuesToString}-${Math.random()}`}
            className="previous-search-button"
          >
            {valuesToString}
          </p>
        );
      })}
    </section>
  );
};
