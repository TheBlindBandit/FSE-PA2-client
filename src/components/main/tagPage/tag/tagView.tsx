import "./tagView.css";
import { ClickTagFunctionType } from "../../../../types/functionTypes";

/**
 * Props type for the Tag component
 * @property t a tag object with name and question count
 */
interface TagProps {
  t: {
    name: string;
    qcnt: number;
  };
  clickTag: ClickTagFunctionType;
}

/**
 * The component to render a tag and its questions count
 * @param props of the Tag component 
 * @returns 
 */
const Tag = ({ t, clickTag }: TagProps) => {
  return (
    <div
      className="tagNode"
      onClick={() => {
        clickTag(t.name);
      }}
    >
      <div className="tagName">{t.name}</div>
      <div>{t.qcnt} questions</div>
    </div>
  );
};

export default Tag;
