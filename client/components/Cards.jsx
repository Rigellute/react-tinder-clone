// Card component - represents a single card. 
CardTemplate = React.createClass({
    propTypes: {
        // Display each card through a React prop.
        card: React.PropTypes.object.isRequired
    },

    render() {
        // Draggable cards are achieved using GSAP plugin 'Draggable'.
        
        setTimeout(function() { // Wait for a .card to exist on the page
            
            // Get the inital X coord of card
            var cardOffsetOrigin = $('.card').offset().left;
            
            Draggable.create('.card', {
                type: "x, y",
                edgeResistance: 0.65,
                
                // On release, use GSAP to animate the card out of view, bump the like or dislike icons or return to original position
                onDragEnd: function(e) {
                    // You like
                    if ($(this.target).offset().left > cardOffsetOrigin + 150) {
                        TweenMax.to(this.target, 0.5, {
                            rotation: 90,
                            x: 1500,
                            display: 'none', // To simulate reactive update from database
                            ease: Power2.easeOut
                        });
                        new TimelineLite()
                            .to('.glyphicon-thumbs-up', 0.5, {
                                color: '#4cae4c',
                                scale: 2.5
                            })
                            .to('.glyphicon-thumbs-up', 0.3, {
                                color: '#333',
                                scale: 1
                            });
                    
                    // You don't like
                    } else if ($(this.target).offset().left < cardOffsetOrigin - 150) {
                        TweenMax.to(this.target, 0.5, {
                            x: -1500,
                            rotation: -90,
                            display: 'none', // To simulate reactive update from database
                            ease: Power2.easeOut
                        });
                        new TimelineLite()
                            .to('.glyphicon-thumbs-down', 0.5, {
                                color: '#d9534f',
                                scale: 2.5
                            })
                            .to('.glyphicon-thumbs-down', 0.3, {
                                color: '#333',
                                scale: 1
                            });
                    
                    // Return to initial position
                    } else {
                        TweenMax.to(this.target, 0.75, {
                            x: 0,
                            y: 0,
                            ease: Power2.easeOut
                        });
                    }
                }, // End of drag release function
                ease: Power2.easeOut
            });
        }, 100)
        return (
            // HTML for each card, using Bootstrap's panel
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">
                    <div className="wrapper">
                        <div className="card">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">{this.props.card.title}</h2>
                                </div>
                                <div className="panel-body">
                                    <img className="images center-block img-responsive img-rounded" src={ this.props.card.image } alt="Chania" />
                                    <p className="top-padding lead">{this.props.card.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});