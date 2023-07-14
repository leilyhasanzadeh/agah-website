//libraries
import type { FC, ReactNode } from "react";

//components
import PrimaryLayoutHeader from "./components/PrimaryLayoutHeader";
import PrimaryLayoutFooter from "./components/PrimaryLayoutFooter";

const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main>
      <PrimaryLayoutHeader />
      {children}
      <PrimaryLayoutFooter />
    </main>
  );
};

export default PrimaryLayout;
