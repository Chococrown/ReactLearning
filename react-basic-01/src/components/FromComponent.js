const FormComponent = ()=>{
    return(
        <div>
            <form>
                <div className="form-Control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placholder="ระบุชื่อรายการของคุณ"/>
                </div>

                <div className="form-Control">
                <label>จำนวนเงิน</label>
                <input type="number" placholder="ระบุจำนวนเงิน"/>
                </div>

                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
                
            </form>
        </div>
    )
}

export default FormComponent