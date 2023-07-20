import { useDrag, useDrop } from "react-dnd";
import { colors, arrowRigth } from "../../images";
import { useContext, useRef } from "react";
import LinksContext from "../../contexts/Links";

export const DraggableBox: React.FC<{ index: number }> = ({ index }) => {
    const { links, selectedPlatforms, setLinks, setSelectedPlatforms } = useContext(LinksContext);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const moveLink = (dragIndex: number, hoverIndex: number) => {
        const dragLink = links[dragIndex];
        const updatedLinks = [...links];
        updatedLinks.splice(dragIndex, 1);
        updatedLinks.splice(hoverIndex, 0, dragLink);
        const dragPlatform = selectedPlatforms[dragIndex];
        const updatedPlatforms = [...selectedPlatforms];
        updatedPlatforms.splice(dragIndex, 1);
        updatedPlatforms.splice(hoverIndex, 0, dragPlatform);
    
        setLinks(updatedLinks);
        setSelectedPlatforms(updatedPlatforms);
      };
    
      type DragItem = {
        type: string;
        index: number;
      };
      const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>(() => ({
        type: 'LINK_BOX',
        item: { type: 'LINK_BOX', index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }));

      const [, drop] = useDrop<DragItem, void, { isOver: boolean; canDrop: boolean }>(() => ({
        accept: 'LINK_BOX',
        hover: (item, monitor) => {
          const dragIndex = item.index;
          const hoverIndex = index;
      
          if (dragIndex === hoverIndex) {
            return;
          }
          const node = nodeRef.current;
          if (!node) {
            return;
          }
          const hoverBoundingRect = (node as HTMLElement).getBoundingClientRect();
      
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      
          const clientOffset = monitor.getClientOffset();
          const hoverClientY = (clientOffset as any).y - hoverBoundingRect.top;
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
          }
      
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
          }
          moveLink(dragIndex, hoverIndex);
          item.index = hoverIndex;
        },
      }));

    const platformName = selectedPlatforms[index]?.name;
    const backgroundColor = platformName && colors[platformName] ? colors[platformName] : '#333';

    return (
      <div
      ref={(node) => {
        nodeRef.current = node;
        drag(drop(node));
      }}
        className="inside__box"
        style={{
          backgroundColor: backgroundColor,
          opacity: isDragging ? 0.5 : 1,
        }}
        onClick={() => window.open(links[index].url, '_blank')}
      >
        <img src={selectedPlatforms[index]?.icon} alt="" />
        {selectedPlatforms[index]?.name}
        <img src={arrowRigth} alt="" />
      </div>
    );
  };