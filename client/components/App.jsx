// App component represents the whole app and sets up the hard coded data in getCards().
App = React.createClass({
  getCards() {
    return [
            {
                title: 'Developer',
                text: 'I love programming',
                image: 'apple-mac-computer603.jpg',
                _id: '1'
            },
            {
                title: 'Connoisseur',
                text: 'Love the grease',
                image: 'img_2.jpg',
                _id: '2'
            },
            {
                title: 'Musician',
                text: 'I am a musician',
                image: 'Apollo5Group.jpg',
                _id: '3'
            },
            {
                title: 'Photographer',
                text: 'I like photography',
                image: 'minolta-camera-photography205.jpg',
                _id: '4'
            }
        ];
    },
    // Get the data context
    renderCards() {
    return this.getCards().map((card) => {
      return <CardTemplate key={card._id} card={card} />;
        });
    },
 
    render() {
        return ( 
            <div className="container">
                <header>
                    <h1> React Tinder Clone</h1>
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                    <span className="glyphicon glyphicon-thumbs-up pull-right"></span>
                </header>
                <div>{this.renderCards()}</div>
            </div>
        );
    }
});
