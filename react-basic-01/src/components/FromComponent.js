import "./FormComponent.css"
import {useState} from 'react'


const FormComponent = ()=>{

    const [title,setTiltle] = useState (' ')

    const [amount,setAmount] = useState(0)

    const inputTiltle = (event) =>{
        setTiltle(event.target.value)
        console.log(event.target.value)
    }

    const inputAmount = (event) =>{
        setAmount(event.target.value)
        console.log(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        console.log(itemData)
        console.log("บันทึกข้อมูลเรียบร้อย")
        setTiltle(' ')
        setAmount(0)
    }

    return(
        <div>
            <form onSubmit = {saveItem}>
                <div className="form-Control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTiltle} 
                    value={title}/>
                </div>

                <div className="form-Control">
                <label>จำนวนเงิน</label>
                <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount}
                value={amount}/>
                </div>

                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    )
}

export default FormComponent