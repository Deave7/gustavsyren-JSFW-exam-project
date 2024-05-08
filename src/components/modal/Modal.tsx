import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";


function Modal() {
   const [formData, setFormData] = useState({
    scoreValue: '0',
    numPageValue: '0',
    review: ''
   })

   const handleClick = () => {
    const { scoreValue, numPageValue, review } = formData
    
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
                <div>Score: <Input input={"number"} value={formData.scoreValue} onChange={handleChange} className="input modal" minValue={0} maxValue={5}></Input></div>
                <div>Number of Pages: <Input input={"number"} value={formData.numPageValue} onChange={handleChange} className="input modal" minValue={0}></Input></div>
                <div>Review: <br /><textarea value={formData.review} name="review" rows={10} onChange={handleChange} placeholder="Leave your review here!"></textarea> </div>
                <div><Button className={"button"} onClick={handleClick} label="Submit"></Button></div>

            </div>
        </div>
     );
}

export default Modal;