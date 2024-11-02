import "./mainView.css";
import { useState } from "react";
import SideBarNav from "./sideBarNav/sideBarNavView";
import HomePageClass from "./routing/home";
import TagPageClass from "./routing/tag";
import AnswerPageClass from "./routing/answer";
import NewQuestionPageClass from "./routing/newQuestion";
import NewAnswerPageClass from "./routing/newAnswer";
import { PageSetterFunctionType } from "../../types/functionTypes";

interface MainProps {
  search?: string;
  title: string;
  setQuestionPage: PageSetterFunctionType;
}

/**
 * The component that renders a page of the Fake StackOverflow app
 * It uses several handler functions to set the page instance
 * The page instance is used to render the content of the page
 * @param search 
 * @param title
 * @param setQuestionPage function to set the search string and page title 
 * @returns 
 */
const Main = ({ search = "", title, setQuestionPage }: MainProps) => {
  const [questionOrder, setQuestionOrder] = useState("newest");
  const [qid, setQid] = useState("");

  /**
   * Handler function to set the page instance to the HomePageClass
   * that renders all questions
   */
  const handleQuestions = () => {
    setQuestionPage();
    setPageInstance(
      new HomePageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
    );
  };

  /**
   * Handler function to set the page instance to the TagPageClass
   * that renders all tags and their questions count
   */
  const handleTags = () => {
    setPageInstance(
      new TagPageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
    );
  };

  /**
   * Handler function to set the page instance to the AnswerPageClass
   * that renders the answers of a question
   * @param qid 
   */
  const handleAnswer = (qid: string) => {
    setQid(qid);
    setPageInstance(
      new AnswerPageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
    );
  };

  /**
   * Handler function to set the page instance to the HomePageClass
   * that renders all questions with a specific tag
   * @param tname 
   */
  const clickTag = (tname: string) => {
    setQuestionPage("[" + tname + "]", tname);
    setPageInstance(
      new HomePageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
    );
  };

  /**
   * Handler function to set the page instance to the NewQuestionPageClass
   * that renders the form to add a new question
   */
  const handleNewQuestion = () => {
    setPageInstance(
      new NewQuestionPageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
    );
  };

  /**
   * Handler function to set the page instance to the NewAnswerPageClass
   * that renders the form to add a new answer
   */
  const handleNewAnswer = () => {
    console.log("handleNewAnswer");
    console.log(qid);
    setPageInstance(
      new NewAnswerPageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
    );
  };

  // Initialize the page instance with the HomePageClass
  const [pageInstance, setPageInstance] = useState(
    () =>
      new HomePageClass({
        search,
        title,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
      })
  );

  /**
   * Update the search string, question order, and question id
   * of pageInstance as they may be stale 
   * when the component re-renders. 
   * These updates will not re-render the component.
   */
  pageInstance.search = search;
  pageInstance.questionOrder = questionOrder;
  pageInstance.qid = qid;

  return (
    <div id="main" className="main">
      <SideBarNav
        selected={pageInstance.getSelected()}
        handleQuestions={handleQuestions}
        handleTags={handleTags}
      />
      <div id="right_main" className="right_main">
        {pageInstance.getContent()}
      </div>
    </div>
  );
};

export default Main;
