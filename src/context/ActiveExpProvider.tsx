import { createContext, useContext, useMemo } from "react";

import { useQueryParams } from "@/hooks/queryParams";

import experiences from "@/assets/experience.json";

type ActiveExp = {
  activeExp: string;
  setActiveExp: (activeExp: string) => void;
};

const ActiveExpContext = createContext<ActiveExp>({
  activeExp: "",
  setActiveExp: () => {},
});

export const useActiveExp = () => {
  return useContext(ActiveExpContext);
};

type ActiveExpProviderProps = {
  children: React.ReactNode;
};

export const ActiveExpProvider: React.FC<ActiveExpProviderProps> = ({
  children,
}: ActiveExpProviderProps) => {
  const [activeExp, setActiveExp] = useQueryParams({
    param: "activeExp",
    options: experiences.map((_, idx) => `${idx}`),
  });

  const activeExpObj = useMemo(() => {
    return { activeExp, setActiveExp };
  }, [activeExp, setActiveExp]);

  return (
    <ActiveExpContext.Provider value={activeExpObj}>
      {children}
    </ActiveExpContext.Provider>
  );
};
