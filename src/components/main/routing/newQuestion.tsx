import React from "react";
import PageClass from ".";
import NewQuestion from "../newQuestion/newQuestionView";

/**
 * A class to render the NewQuestion component
 */
export default class NewQuestionPageClass extends PageClass {
  getContent(): React.ReactNode {
    console.log(this);
    return <NewQuestion handleQuestions={this.handleQuestions} />;
  }

  getSelected(): string {
    return "";
  }
}
