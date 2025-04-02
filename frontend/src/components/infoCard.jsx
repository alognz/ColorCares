import Card from "../components/card.jsx"
import "../styles/infoCard.css"

function InfoCard({emoji, fact, desc, ref}) {
    return (
    <Card>
        <div className="container">
        <div className="emoji">{emoji}</div>
        <div className="fact">{fact}</div>
        <div className="desc">{desc}</div>
        <div className="ref">{ref}</div>
        </div>
    </Card>
    )
}
export default InfoCard