import Card from "./Card"
const cardHolder = () => {
    return(
        <main className="cardHolder">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card className="lavish" />
            <Card />
            <Card />
        </main>

    )
}
// create the card animation when clicked
// Learn how to populate the display from 4 to 8
// Implement the unsplash api
export default cardHolder;