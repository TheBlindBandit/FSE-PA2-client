import { useState } from "react";
import { addAnswer } from "../services/answerService";
import { QuestionIdFunctionType } from "../types/functionTypes";

/**
 * A hook to validate the entries in the new answer form
 * @param qid 
 * @param handleAnswer 
 */
export const useNewAnswer = (
  qid: string,
  handleAnswer: QuestionIdFunctionType
) => {
  const [usrn, setUsrn] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [usrnErr, setUsrnErr] = useState<string>("");
  const [textErr, setTextErr] = useState<string>("");

  const postAnswer = async () => {
    let isValid = true;

    if (!usrn) {
      setUsrnErr("Username cannot be empty");
      isValid = false;
    }

    if (!text) {
      setTextErr("Answer text cannot be empty");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const answer = {
      text: text,
      ans_by: usrn,
      ans_date_time: new Date(),
    };

    const res = await addAnswer(qid, answer);
    if (res && res._id) {
      handleAnswer(qid);
    }
  };

  return {
    usrn,
    setUsrn,
    text,
    setText,
    usrnErr,
    textErr,
    postAnswer,
  };
};
