import React, { PureComponent, Fragment } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styles from './Control.css';

class Control extends PureComponent {
  state = {
    bid: 3,
    emoting: false,
    bidding: false,
    hand: [
      { type: 1 },
      { type: 1 },
      { type: 1 },
      { type: 0 }
    ]
  };

  static propTypes = {
    phase: PropTypes.number
  };

  toggleEmoting = () => {
    this.setState(({ emoting }) => ({ emoting: !emoting }));
  };

  toggleBidding = () => {
    this.setState(({ bidding }) => ({ bidding: !bidding }));
  };

  handleBidChange = value => {
    this.setState(({ bid }) => ({ bid: bid + value }));
  };

  render() { 
    const { hand, emoting, bidding, bid } = this.state;
    const { phase } = this.props;

    switch(phase) {
      case 1:
        return (
          <section className={styles.control}>
            {emoting && <Emotes toggle={this.toggleEmoting}/>}
            {bidding && 
              <Bids 
                toggle={this.toggleBidding} 
                bid={bid}
                changeBid={this.handleBidChange}
                phase={phase}
              />}
            {!emoting && !bidding &&
              <Fragment>
                <div>
                  <button onClick={this.toggleEmoting}>Emote</button>
                  <button onClick={this.toggleBidding}>Bid</button>
                </div>
                <div className="hand">
                  {hand.map((card, i) => (
                    <Card key={i} card={card}/>
                  ))}
                </div>
              </Fragment>
            }
          </section>
        );
      default: 
        return (
          <section className={styles.control}>
            {emoting && <Emotes toggle={this.toggleEmoting}/>}
            {!emoting &&
              <Bids 
                toggle={this.toggleBidding} 
                bid={bid}
                changeBid={this.handleBidChange}
                phase={phase}
                emoteToggle={this.toggleEmoting}
              />
            }
          </section>
        );
    }
  }
}
 
export default Control;

class Emotes extends PureComponent {

  static propTypes = {
    toggle: PropTypes.func.isRequired
  };

  render() { 
    const { toggle } = this.props;

    return (
      <div className="emotes">
        <i onClick={toggle}className="fas fa-times"></i>
        <i className="far fa-laugh-squint"></i>
        <i className="far fa-sad-cry"></i>
        <i className="far fa-grimace"></i>
        <i className="far fa-angry"></i>
      </div>
    );
  }
}
 
class Bids extends PureComponent {

  static propTypes = {
    toggle: PropTypes.func,
    changeBid: PropTypes.func.isRequired,
    bid: PropTypes.number.isRequired,
    phase: PropTypes.number,
    emoteToggle: PropTypes.func
  };

  render() { 
    const { toggle, bid, changeBid, phase, emoteToggle } = this.props;

    switch(phase) {
      case 1:
        return (
          <div className="bids">
            <i onClick={toggle} className="fas fa-times"></i>
            {bid <= 1 ? 
              <i className="fa fa-minus"></i>
              : <i className="fa fa-minus" onClick={() => changeBid(-1)}></i>
            }
            <p>{bid}</p>
            {bid >= 8 ?
              <i className="fa fa-plus"></i>
              : <i className="fa fa-plus" onClick={() => changeBid(+1)}></i>
            }
            <button>Bid</button>
          </div>
        );
      case 2:
        return (
          <div className="bids">
            <button onClick={emoteToggle}>Emote</button>
            <button>Pass</button>
            {bid <= 1 ? 
              <i className="fa fa-minus"></i>
              : <i className="fa fa-minus" onClick={() => changeBid(-1)}></i>
            }
            <p>{bid}</p>
            {bid >= 8 ?
              <i className="fa fa-plus"></i>
              : <i className="fa fa-plus" onClick={() => changeBid(+1)}></i>
            }
            <button>Bid</button>
          </div>
        );
      case 3:
        return (
          <div className="bids">
            <button onClick={emoteToggle}>Emote</button>
            <h4>Flip {bid} squirrels</h4>
          </div>
        );
      default:
        return (
          <div className="bids">
            <h6>The game is not happening right now!</h6>
          </div>
        );
    }
  }
}