import { useEffect, useState } from "react";
import { getQuestionsByFilter } from "../services/questionService";
import { QuestionResponseType } from "../types/entityTypes";

interface UseQuestionPageProps {
  order: string;
  search: string;
}

/**
 * a hook to fetch questions by order button clicked and search string
 * @param order - order of the questions
 * @param search - search query
 */
export const useQuestionPage = ({ order, search }: UseQuestionPageProps) => {
  const [qlist, setQlist] = useState<QuestionResponseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getQuestionsByFilter(order, search);
        setQlist(res || []);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, [order, search]);

  return { qlist };
};