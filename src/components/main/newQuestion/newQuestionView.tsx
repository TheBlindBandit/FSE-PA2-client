import "./newQuestionView.css";
import Form from "../baseComponents/form/formView";
import Input from "../baseComponents/input/inputView";
import Textarea from "../baseComponents/textarea/textAreaView";
import { useNewQuestion } from "../../../hooks/useNewQuestion";
import { VoidFunctionType } from "../../../types/functionTypes";

interface NewQuestionProps {
  handleQuestions: VoidFunctionType;
}

/**
 * Component to render the form for a new question
 * @param props - handleQuestions
 */
const NewQuestion = ({ handleQuestions }: NewQuestionProps) => {
  const {
    title,
    setTitle,
    text,
    setText,
    tag,
    setTag,
    usrn,
    setUsrn,
    titleErr,
    textErr,
    tagErr,
    usrnErr,
    postQuestion,
  } = useNewQuestion(handleQuestions);

  return (
    <Form>
      <Input
        title={"Question Title"}
        hint={"Limit title to 100 characters or less"}
        id={"formTitleInput"}
        val={title}
        setState={setTitle}
        err={titleErr}
      />
      <Textarea
        title={"Question Text"}
        hint={"Add details"}
        id={"formTextInput"}
        val={text}
        setState={setText}
        err={textErr}
      />
      <Input
        title={"Tags"}
        hint={"Add keywords separated by whitespace"}
        id={"formTagInput"}
        val={tag}
        setState={setTag}
        err={tagErr}
      />
      <Input
        title={"Username"}
        id={"formUsernameInput"}
        val={usrn}
        setState={setUsrn}
        err={usrnErr}
      />
      <div className="btn_indicator_container">
        <button className="form_postBtn" onClick={postQuestion}>
          Post Question
        </button>
        <div className="mandatory_indicator">* indicates mandatory fields</div>
      </div>
    </Form>
  );
};

export default NewQuestion;
