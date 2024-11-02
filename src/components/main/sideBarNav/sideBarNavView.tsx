import "./sideBarNavView.css";
import { VoidFunctionType } from "../../../types/functionTypes";

/**
 * Props type for the SideBarNav component
 * @param selected the selected menu item
 * @param handleQuestions a function to handle the click event on the questions menu
 * @param handleTags a function to handle the click event on the tags menu
 */
interface SideBarNavProps {
  selected?: string;
  handleQuestions: VoidFunctionType;
  handleTags: VoidFunctionType;
}

/**
 * A component to render the side bar navigation menu
 * with links to display questions and tags
 * @param props of the SideBarNav component 
 * @returns 
 */
const SideBarNav = ({
  selected = "",
  handleQuestions,
  handleTags,
}: SideBarNavProps) => {
  return (
    <div id="sideBarNav" className="sideBarNav">
      <div
        id="menu_question"
        className={`menu_button ${selected === "q" ? "menu_selected" : ""}`}
        onClick={() => {
          handleQuestions();
        }}
      >
        Questions
      </div>
      <div
        id="menu_tag"
        className={`menu_button ${selected === "t" ? "menu_selected" : ""}`}
        onClick={() => {
          handleTags();
        }}
      >
        Tags
      </div>
    </div>
  );
};

export default SideBarNav;
