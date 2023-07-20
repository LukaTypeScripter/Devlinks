
interface LinkItem {
    platform: string;
    url: string;
    id: string;
  }
export interface LinksContextValue {
    selectedPlatforms: (SelectedPlatformInfo | null)[];
    setSelectedPlatformForLink: (index: number, platformInfo: SelectedPlatformInfo | null) => void
    links: LinkItem[]
    setLinks: React.Dispatch<React.SetStateAction<LinkItem[]>>
    setSelectedPlatforms:React.Dispatch<React.SetStateAction<(SelectedPlatformInfo | null)[]>>
}


export const initialContextValue: LinksContextValue = {
    selectedPlatforms: [],
    setSelectedPlatformForLink: () => {},
    links:[],
    setLinks: () => {},
    setSelectedPlatforms: () => {},

}
export interface SelectedPlatformInfo {
    name: string;
    icon: string;
    id: string;
  }