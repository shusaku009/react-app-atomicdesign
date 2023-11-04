import React, { memo } from "react";
import styled from "styled-components";

import { Input } from "../atoms/Input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const SearchInput = memo(() => {
  console.log("Search input");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
      <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;