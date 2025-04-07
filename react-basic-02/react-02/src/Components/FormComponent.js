import {useState} from 'react'

import { v4 as uuidv4 } from 'uuid';


const FormComponent = (props)=>{

    const [title,setTiltle] = useState (' ')

    const [amount,setAmount] = useState(0)

    const inputTiltle = (event) =>{
        setTiltle(event.target.value)
    }

    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTiltle(' ')
        setAmount(0)
    }

    return(
        <div>
            <form onSubmit = {saveItem}>
                <div>
                    <label>ชื่อรายการ</label>
                    <input type = "text" placeholder = "ระบุชื่อรายการของคุณ" onChange = {inputTiltle} 
                    value = {title}/>
                </div>

                <div>
                <label>จำนวนเงิน</label>
                <input type = "number" placeholder = "ระบุจำนวนเงิน" onChange = {inputAmount}
                value = {amount}/>
                </div>

                <div>
                    <button type = "submit">เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    )
}

export default FormComponent