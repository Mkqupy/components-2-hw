import React from "react";

class CounterDisplay extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      console.log("Значення count змінилося");
    }
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <p>Поточне значення: {count}</p>
      </div>
    );
  }
}

export default CounterDisplay;