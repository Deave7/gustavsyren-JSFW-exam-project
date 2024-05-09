import { useContext, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import useVersion from "../../custom-hooks/useVersion";
import { GlobalContext } from "../context/GlobalContext";

type ModalProps = {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const { dispatch } = useContext(GlobalContext)
    const parsedVersion = useVersion()
    const [formData, setFormData] = useState({
    scoreValue: '0',
    numPageValue: '0',
    review: '',
    _version_: parsedVersion
   })

   const handleClick = () => {
    dispatch({ type: 'SAVE_REVIEW', payload: formData})
    onClose()
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    })
   }

    return ( 
        <div className="modal">
            <div className="container">
                <div>Score: <Input input={"number"} value={formData.scoreValue} onChange={handleChange} className="input modal" minValue={0} maxValue={5} name="scoreValue"></Input></div>
                <div>Number of Pages: <Input input={"number"} value={formData.numPageValue} onChange={handleChange} className="input modal" name="numPageValue" ></Input></div>
                <div>Review: <br /><textarea value={formData.review} name="review" rows={10} onChange={handleChange} placeholder="Leave your review here!"></textarea> </div>
                <div><Button className={"button"} onClick={handleClick} label="Submit"></Button></div>
            </div>
        </div>
     );
}

export default Modal;