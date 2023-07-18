import React, { createContext, useEffect, useState, } from "react";
import { LinksContextValue, SelectedPlatformInfo, initialContextValue } from "./types/linkTypes";
const LinksContext = createContext<LinksContextValue>(initialContextValue);
interface LinkItem {
    platform: string;
    url: string;
  }
export const LinksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const initialLinks: LinkItem[] = JSON.parse(localStorage.getItem('links')!) || [];
    const initialPlatforms: (SelectedPlatformInfo | null)[] = JSON.parse(localStorage.getItem('selectedPlatforms')!) || Array.from({ length: initialLinks.length }, () => null);
    const [selectedPlatforms, setSelectedPlatforms] = useState<(SelectedPlatformInfo | null)[]>(initialPlatforms);
      const [links, setLinks] = useState(initialLinks);
      useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links));
        localStorage.setItem('selectedPlatforms', JSON.stringify(selectedPlatforms));
      }, [links, selectedPlatforms]);
        
    const setSelectedPlatformForLink = (index: number, platformInfo: SelectedPlatformInfo | null) => {
        setSelectedPlatforms((prevPlatforms) => {
            const updatedPlatforms = [...prevPlatforms];
            updatedPlatforms[index] = platformInfo;
            return updatedPlatforms;
          });
    };
  const value: LinksContextValue = {
    selectedPlatforms,
    setSelectedPlatformForLink,
    links,
    setLinks
  };
 
  return <LinksContext.Provider value={value}>{children}</LinksContext.Provider>;
};

export default LinksContext;