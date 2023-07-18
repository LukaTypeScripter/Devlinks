
interface LinkItem {
    platform: string;
    url: string;
  }
export interface LinksContextValue {
    selectedPlatforms: (SelectedPlatformInfo | null)[];
    setSelectedPlatformForLink: (index: number, platformInfo: SelectedPlatformInfo | null) => void
    links: LinkItem[]
    setLinks: React.Dispatch<React.SetStateAction<LinkItem[]>>
}


export const initialContextValue: LinksContextValue = {
    selectedPlatforms: [],
    setSelectedPlatformForLink: () => {},
    links:[],
    setLinks: () => {},

}
export interface SelectedPlatformInfo {
    name: string;
    icon: string;
    id: string;
  }