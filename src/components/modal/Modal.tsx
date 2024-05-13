import { useContext, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import useVersion from "../../custom-hooks/useVersion";
import { GlobalContext } from "../context/GlobalContext";
import { ModalProps } from "../../types/types";

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const { dispatch } = useContext(GlobalContext);
  const [pageNumError, setPageNumError] = useState(false)
  const [reviewError, setReviewError] = useState(false)
  const [scoreError, setScoreError] = useState(false)
  const parsedVersion = useVersion();
  const [formData, setFormData] = useState({
    scoreValue: "0",
    numPageValue: "0",
    review: "",
    _version_: parsedVersion,
  });

  const handleClick = () => {
    const scoreValue = parseInt(formData.scoreValue);
    const numPageValue = parseInt(formData.numPageValue);
    const reviewLength = formData.review.length;
    const scoreError = scoreValue < 1 || scoreValue > 5;
    const pageNumError = numPageValue < 1;
    const reviewError = reviewLength < 10;
  
    setScoreError(scoreError);
    setPageNumError(pageNumError);
    setReviewError(reviewError);
  
    if (scoreError || pageNumError || reviewError) {
      return;
    }
  
    dispatch({ type: "SAVE_REVIEW", payload: formData });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="modal">
      <div className="container">
        <div>
          Score:{" "}
          <Input
            input={"number"}
            value={formData.scoreValue}
            onChange={handleChange}
            className="input modal"
            minValue={0}
            maxValue={5}
            name="scoreValue"
          ></Input>
          {scoreError && <p className="input-error">Score needs to be between 1 and 5</p>}
        </div>
        <div>
          Number of Pages:{" "}
          <Input
            input={"number"}
            value={formData.numPageValue}
            onChange={handleChange}
            className="input modal"
            name="numPageValue"
          ></Input>
          {pageNumError && <p className="input-error">The number of pages needs to be greater than 0</p>}
        </div>
        <div>
          Review: <br />
          <textarea
            value={formData.review}
            name="review"
            rows={10}
            onChange={handleChange}
            placeholder="Leave your review here!"
          ></textarea>{" "}
          {reviewError && <p className="input-error">The review needs to be longer than 10 characters</p>}
        </div>
        <div>
          <Button
            className={"button"}
            onClick={handleClick}
            label="Submit"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
