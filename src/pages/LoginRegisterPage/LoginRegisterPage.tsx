import React from "react";
import { PageContainer } from "./style";

interface Props {
  type: string;
}

const LoginPage = ({ type }: Props) => {
  return (
    <PageContainer>
      <h2>{type.toUpperCase()} PAGE</h2>
    </PageContainer>
  );
};

export default LoginPage;
