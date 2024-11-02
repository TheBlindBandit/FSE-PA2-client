import { useState } from "react";
import Header from "./header";
import Main from "./main/mainView";

/**
 * The main component for the Fake StackOverflow app
 * defines the search state and the main title state
 * @returns FakeStackOverflow component
 */
const FakeStackOverflow = () => {
  const [search, setSearch] = useState<string>("");
  const [mainTitle, setMainTitle] = useState<string>("All Questions");

  /**
   * Handler Function to set the search string and the main title of the page
   * @param search 
   * @param title 
   */
  const setQuestionPage = (
    search = "",
    title = "All Questions"
  ): void => {
    setSearch(search);
    setMainTitle(title);
  };

  return (
    <>
      <Header search={search} setQuestionPage={setQuestionPage} />
      <Main
        title={mainTitle}
        search={search}
        setQuestionPage={setQuestionPage}
      />
    </>
  );
};

export default FakeStackOverflow;
