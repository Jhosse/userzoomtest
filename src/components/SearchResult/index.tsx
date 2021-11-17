import React, { ReactElement } from "react";
import { useHistory, Link } from "react-router-dom";
import { GetNewsResult } from "../../services/api/types";
import { RouteNames } from "../Routes";
import { formatToDateString } from "../../utils/formatDate";

import "./styles.css";

interface SearchResultProps {
  item: GetNewsResult;
}

export default ({ item }: SearchResultProps): ReactElement => {
  const history = useHistory();

  return (
    <Link
      className="new-container"
      to={{
        pathname: RouteNames.NewItem,
        search: `id=${item.id}`
      }}
    >
      <article>
        <span className="new-tag">
          {item.sectionName}
        </span>
        <div>
          <h1 className="new-title">
            {item.webTitle}
          </h1>
          <p className="new-date">
            Published:&nbsp;
            <span>
              {formatToDateString(item.webPublicationDate)}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
};
