// componentDidUpdate — викликається після оновлення компонента,
// наприклад, коли змінилися пропси чи стан.
// Можна використовувати для реагування на зміни.

import React from "react";

class MyComponentDidUpdate extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.someValue !== this.props.someValue) {
      console.log("Компонент оновився");
      // Виконуємо дію, якщо пропси змінилися
    }
  }

  render() {
    return (
      <div>
        <h1>Оновлений компонент</h1>
        <p>Значення: {this.props.someValue}</p>
      </div>
    );
  }
}

export default MyComponentDidUpdate;
