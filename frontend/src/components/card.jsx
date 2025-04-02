import '../styles/card.css'

function Card(props) {
    return (
        <>
        <div className="outline">
            {props.children}
        </div>
        </>
    )
}

export default Card