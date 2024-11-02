import React from "react";
import PageClass from ".";
import QuestionPage from "../questionPage/questionPageView";

/**
 * A class to render the QuestionPage component
 * that renders all questions based on order and search if any
 */
export default class HomePageClass extends PageClass {
  getContent(): React.ReactNode {
    return (
      <QuestionPage
        title_text={this.title}
        order={this.questionOrder.toLowerCase()}
        search={this.search}
        setQuestionOrder={this.setQuestionOrder}
        clickTag={this.clickTag}
        handleAnswer={this.handleAnswer}
        handleNewQuestion={this.handleNewQuestion}
      />
    );
  }

  getSelected(): string {
    return "q";
  }
}
