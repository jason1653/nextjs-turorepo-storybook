// __mocks__/next/link.ts
import React from "react";

const MockLink: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <a>{children}</a>
    </>
  );
};

export default MockLink;
