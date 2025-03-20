import "./FormComponent.css"

const FormComponent = ()=>{

    const inputTiltle = (event) =>{
        console.log(event.target.value)
    }

    const inputAmount = (event) =>{
        console.log(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()
        console.log("บันทึกข้อมูลเรียบร้อย")
    }

    return(
        <div>
            <form onSubmit = {saveItem}>
                <div className="form-Control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placholder="ระบุชื่อรายการของคุณ" onChange={inputTiltle}/>
                </div>

                <div className="form-Control">
                <label>จำนวนเงิน</label>
                <input type="number" placholder="ระบุจำนวนเงิน" onChange={inputAmount}/>
                </div>

                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    )
}

export default FormComponent