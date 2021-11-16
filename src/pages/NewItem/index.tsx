import React, {
  useState,
  useEffect,
  ReactElement
} from "react";
import { useHistory } from "react-router-dom";
import { getNew } from "../../services/api";
import { GetNew, GetNewResponse, GetNewResult, Asset } from "../../services/api/types";
import PageContainer from "../../containers/PageContainer";
import BodyPageContainer from "../../containers/BodyPageContainer";

import "./style.css";

export default (): ReactElement => {
  const { search: pathnameSearch } = useHistory().location;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [singleNew, setSingleNew] = useState<GetNewResult>(undefined);

  /**
   * - In a real project all of these get data functions 
   * - should required a better understanding of the API.
   * - Making sure it won't fail or adding a fallback to it.
   */

  const getImage = (): string => {
    const imageUrl = singleNew.blocks.main.elements[0].assets.find((item: Asset) => {
      return item.typeData.aspectRatio === "5:3" && item.typeData.width > 700
    }).file;

    return imageUrl;
  };

  const getImageData = (): {
    caption: string,
    credit: string,
    alt: string
  } => {
    const { caption, credit, alt } = singleNew.blocks.main.elements[0].imageTypeData;
    return { caption, credit, alt };
  };

  const getContent = (): string => singleNew.blocks.body[0].bodyHtml;

  useEffect(() => {
    const cleanId = pathnameSearch.split("?id=").pop();
    const payload: GetNew = {
      id: cleanId
    };

    (async () => {
      const data: GetNewResponse = await getNew(payload);
      setSingleNew(data.content);
      setIsLoading(false);
    })();
  }, []);

  return (
    <PageContainer>
      <BodyPageContainer>
        {isLoading ? (
          <h1>LOADING</h1>
        ) : (
          <section>
            <figure className="m-zero">
              <img src={getImage()} className="header-image" alt={getImageData().alt} />
              <figcaption className="header-image-caption">{getImageData().caption} {getImageData().credit}</figcaption>
            </figure>

            <div className="section-body">
              <h1 className="new-title">{singleNew.webTitle}</h1>
              <div className="new-content" dangerouslySetInnerHTML={{ __html: getContent() }} />
              <a href={singleNew.webUrl} className="new-link" target="_blank">Read the full article.</a>
            </div>
          </section>
        )}
      </BodyPageContainer>
    </PageContainer>
  );
};
