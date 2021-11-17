import React, {
  useState,
  useEffect,
  ReactElement
} from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setErrorAlert } from "../../store/errorAlertSlice";
import { getNew } from "../../services/api";
import { GetNew, GetNewResponse, GetNewResult, Asset } from "../../services/api/types";
import PageContainer from "../../containers/PageContainer";
import BodyPageContainer from "../../containers/BodyPageContainer";
import Spinner from "../../components/Spinner";
import Button, { ButtonVersion } from "../../components/Button";

import "./style.css";

export default (): ReactElement => {
  const history = useHistory();
  const { search: pathnameSearch } = history.location;
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [singleNew, setSingleNew] = useState<GetNewResult>(undefined);

  /**
   * - In a real project all of these get data functions 
   * - should required a better understanding of the API.
   * - Making sure it won't fail and adding a proper fallback to it.
   */

  const getImage = (): string => {
    try {
      const imageUrl = singleNew.blocks.main.elements[0].assets.find((item: Asset) => {
        return item.typeData.aspectRatio === "5:3" && item.typeData.width > 700
      });
  
      if (imageUrl) return imageUrl.file;
  
      return "https://via.placeholder.com/1000x600";
    } catch (error) {
      dispatch(setErrorAlert("Image URL missing"));
      return "https://via.placeholder.com/1000x600";
    }
  };

  const getImageData = (): {
    caption: string,
    credit: string,
    alt: string
  } => {
    try {
      const imageData = singleNew.blocks.main.elements[0].imageTypeData;

      if (imageData) {
        return { 
          caption: imageData.caption,
          credit: imageData.credit,
          alt: imageData.alt,
        };
      }
  
      return { 
        caption: "caption",
        credit: "credit",
        alt: "new image header",
      };
    } catch (error) {
      dispatch(setErrorAlert("Image credits missing"));
      return { 
        caption: "caption",
        credit: "credit",
        alt: "new image header",
      };
    }

  };

  const getContent = (): string => singleNew.blocks.body[0].bodyHtml;

  const handleClick = () => history.goBack();

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
          <Spinner className="new-item-spinner" />
        ) : (
          <section>
            <figure className="m-zero">
              <img src={getImage()} className="header-image" alt={getImageData().alt} />
              <figcaption className="header-image-caption">{getImageData().caption} {getImageData().credit}</figcaption>
            </figure>

            <div className="section-body">
              <h1 className="new-title">{singleNew.webTitle}</h1>
              <div className="new-content" dangerouslySetInnerHTML={{ __html: getContent() }} />
              <footer className="new-item-footer">
                <a
                  href={singleNew.webUrl}
                  className="new-link"
                  target="_blank"
                >
                    Read the full article.
                </a>
                <Button
                  className={""}
                  content={"Back"}
                  action={handleClick}
                  version={ButtonVersion.Secondary}
                />
              </footer>
            </div>
          </section>
        )}
      </BodyPageContainer>
    </PageContainer>
  );
};
