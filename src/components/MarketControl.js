import React from "react";
// import MarketList from "./MarketList";
import Market from "./Market";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];


class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marketVisibleOnPage: 0
    };
  }


  handleClickDecrease = () => {
    this.setState(prevState => ({
      marketVisibleOnPage: prevState.marketVisibleOnPage - 1
    }));
  }

  handleClickIncrease = () => {
    this.setState(prevState => ({
      marketVisibleOnPage: prevState.marketVisibleOnPage + 1
    }));
    console.log(this.st)
  }

  render() {
    let currentlyVisibleState = null;
    let currentlyVisibleMarket = 1;
    let previousDayButton = null;
    let nextDayButton = null;
    if (this.state.marketVisibleOnPage < 1) {
      currentlyVisibleState = <Market day={marketSchedule[this.state.marketVisibleOnPage].day}
      location={marketSchedule[this.state.marketVisibleOnPage].location}
      hours={marketSchedule[this.state.marketVisibleOnPage].hours}
      booth={marketSchedule[this.state.marketVisibleOnPage].booth} />
      nextDayButton = <button onClick={this.handleClickIncrease}>Next Day</button>
    } else if (this.state.marketVisibleOnPage > 4) {
      currentlyVisibleState = <Market day={marketSchedule[this.state.marketVisibleOnPage].day}
      location={marketSchedule[this.state.marketVisibleOnPage].location}
      hours={marketSchedule[this.state.marketVisibleOnPage].hours}
      booth={marketSchedule[this.state.marketVisibleOnPage].booth} />
      previousDayButton = <button onClick={this.handleClickDecrease}>Previous Day</button>
    } else {
      currentlyVisibleState = <Market day={marketSchedule[this.state.marketVisibleOnPage].day}
      location={marketSchedule[this.state.marketVisibleOnPage].location}
      hours={marketSchedule[this.state.marketVisibleOnPage].hours}
      booth={marketSchedule[this.state.marketVisibleOnPage].booth} />
      nextDayButton = <button onClick={this.handleClickIncrease}>Next Day</button>
      previousDayButton = <button onClick={this.handleClickDecrease}>Previous Day</button>
    }
    return (
      <>
        {currentlyVisibleState}
        {previousDayButton}
        {nextDayButton}
      </>
    );
  }
}

export default MarketControl;