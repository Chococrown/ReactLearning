import Item from "./Item"

const Transaction = (props) =>{

    const {items} = props

    return (
        <ul>

            {items.map((element) => {

                return <Item {...element} key={' '} />

            })}

        </ul>
    )
}


export default Transaction