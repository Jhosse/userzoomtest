import React, { ReactElement } from "react";
import PageContainer from "../../containers/PageContainer";
import BodyPageContainer from "../../containers/BodyPageContainer";
import Search from "../../components/Search";

export default (): ReactElement => {
  return (
    <PageContainer>
      <BodyPageContainer>
        <Search />
      </BodyPageContainer>
    </PageContainer>
  );
};