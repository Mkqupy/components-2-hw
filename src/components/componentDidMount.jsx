// componentDidMount — викликається відразу після того,
// як компонент вставлений у DOM. Це місце,
// де зазвичай виконуються запити на сервер або встановлюються таймери.

import React from "react";

class TimerComponent extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Таймер працює кожну секунду");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>Таймер запущено!</div>;
  }
}

export default TimerComponent;

