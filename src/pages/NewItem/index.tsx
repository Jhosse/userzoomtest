import React, {
  ReactElement
} from "react";
import PageContainer from "../../containers/PageContainer";
import BodyPageContainer from "../../containers/BodyPageContainer";

export default (): ReactElement => {
  return (
    <PageContainer>
      <BodyPageContainer>
        <h1>TEST</h1>
      </BodyPageContainer>
    </PageContainer>
  );
};