// componentWillUnmount — викликається перед тим,
// як компонент буде видалений з DOM.
// Використовується для очищення ресурсів,
// наприклад, видалення таймерів або відписки від подій

import React from "react";

class MyComponentWillUnmount extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Таймер працює");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Компонент буде видалений");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Компонент готовий до видалення</h1>
      </div>
    );
  }
}

export default MyComponentWillUnmount;
