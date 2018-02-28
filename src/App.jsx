import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import todos from "./todos";
import ToDo from "./components/ToDo";
import Form from "./components/Form";

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-06 изменение  Состояния
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.initialData
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.nextId = this.nextId.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this._nextId = 7
  }

  nextId () {
      this._nextId = this._nextId || 7;
      return this._nextId++;
  }

  handleStatusChange(id) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    // this.setState({todos: todos});  в  ES 6  если названия свойства и значения одинаковы, то можно указать что-то одно
    this.setState({ todos });
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(title) {
      let todo ={
          id: this.nextId(),
          title,
          completed: false
      };

      let todos = [...this.state.todos, todo];

      this.setState({todos});
  }

  handleEdit (id, title) {
      let todos = this.state.todos.map(todo => {
          if (todo.id === id) {
              todo.title = title;
          }

          return todo;
      });
      this.setState({ todos })
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />

        <section className="todo-list">
          {this.state.todos.map(todo => (
            <ToDo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onStatusChange={this.handleStatusChange}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
          ))}
        </section>
        <Form onAdd={this.handleAdd.bind(this)} />
      </main>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  initialData: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    })
  ).isRequired
};
App.defaultProps = {
  title: "React Todo"
};

ReactDOM.render(<App initialData={todos} />, document.getElementById("root"));

// создадим метод - обработчик события, которы будет срабатывать при клике

//j,+trn события в React - это походий объект события получамый в DOM

// для обносления сочтояния использутся метод setState, который в качестве аргумента
// принимает объект, в котором указываются новые значения изменяемых свойств

// вторым параметров в функцию setState пожно указать функцию обратного вызова, в которая сработает сразу после обновления состояния

// значение состояния state мы можем передать через свойства props
/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-06 Состояния
 */

// // до этого момента в нашем приложени не было интерактивности
//
// // что бы добавить интерактивности, компонентам нужно добавить состояния
//
// // состояния - это данные, которые могут изменяться
//
// // в програмировании данные, которые могут изменяться храняться в переменных
// //для хранения переменных компонентов имользуются состояния, которые представляют из себя простой объект
//
// // до настоящего момента для создания компонентов мы использовали функции (Stateless Functional Components)
// // у функциональных компонентов нет состояния
// //эти компоненты очень простые, они принимают параметры с данными и на основании этих данных выдают JSX
//
// // что бы у компонента было состояние, его нужно создать не как функцию а как объект, а точнее как класс, на основе которого и будут созданы
// // компоненты с осотоянием
//
// // для того что бы компоненту добавить состояния, его нужно переделать как класс (сдалем н апримере компонента Checkbox)
// // компонент созданній таким способом так же принимает свойства, однако для доступа к обїекту props нужно добавить this
// // тоесть объект props будет свойством самого компонента
//
// // после этого компоненту можно дабавить сосоянии, для этого классу нужно дабавить конструктор
// // в конструкторе нужно вызвать конструктор родительского класса, то есть класса Component, для этого вызовем метод super();
//
// //потом в конструкторе добавим свойство state - этот объект и есть состояние компонента,
// // в состояние можно что-то поместить (отмечен checkbox или нет)
//
// // затем в методе render() вместо this.props.checked укажем this.state.checked, тоесть значение мы теперь берем из состояния
//
// //
//
// import ToDo from "./components/ToDo";
//
//
// function App(props) {
//
//     return(
//         <main>
//             <Header title={props.title}/>
//
//             <section className="todo-list">
//                 {props.todos.map(todo =>
//                     <ToDo key={todo.id} title={todo.title} completed={todo.completed}/>
//                 )}
//             </section>
//         </main>
//     )
// }
//
// App.propTypes ={
//     title: React.PropTypes.string.isRequired,
//     todos: React.PropTypes.arrayOf(React.PropTypes.shape({
//         id: React.PropTypes.number.isRequired,
//         title : React.PropTypes.string.isRequired,
//         completed : React.PropTypes.bool.isRequired
//     })).isRequired
// };
// App.defaultProps ={
//     title: 'ffhopopopffff'
// };
//
//
// ReactDOM.render(<App todos={todos} />, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-05  особенности JSX
 */

// //воспользуемся методом arrayOf для подк
// //todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
//
// //так же мы может указать какие свойства могут быть у этого объекта с момощью метода shape()
//
// // что бы перебрать загружаемій объект
//
// import ToDo from "./components/ToDo";
//
//
// function App(props) {
//     console.log(todos);
//     return(
//         <main>
//             <Header title={props.title}/>
//
//             <section className="todo-list">
//                 {props.todos.map(todo =>
//                     <ToDo key={todo.id} title={todo.title} completed={todo.completed}/>
//                 )}
//             </section>
//         </main>
//     )
// }
//
// App.propTypes ={
//     title: React.PropTypes.string.isRequired,
//     todos: React.PropTypes.arrayOf(React.PropTypes.shape({
//         id: React.PropTypes.number.isRequired,
//         title : React.PropTypes.string.isRequired,
//         completed : React.PropTypes.bool.isRequired
//     })).isRequired
// };
// App.defaultProps ={
//     title: 'ffhopopopffff'
// };
//
//
// ReactDOM.render(<App todos={todos} />, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-04  Композиция
 */

// import ToDo from "./components/ToDo";
//
//
// function App(props) {
//
//     return(
//         <main>
//             <Header title={props.title}/>
//             <section className="todo-list">
//                 <ToDo title={"Learn JS"} completed={true}/>
//                 <ToDo title={"Learn React"} completed={false}/>
//             </section>
//         </main>
//     )
// }
//
// App.propTypes ={
//     title: React.PropTypes.string.isRequired
// };
// App.defaultProps ={
//     title: 'ffhopopopffff'
// };
//
//
// ReactDOM.render(<App />, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-04  Композиция
 */
//
// import ToDo from "./components/ToDo";
// //следующий шаг это разделение приложения на более мелкие приложения
//
// // определим заголовок как отдельный компонент, создаем папку components
//
// //разделение приложеня на меленькие компоненты называется декомпозицией
//
// // а совмежение нескольких маленьких компонентов в один большей называется композицией
//
//
// function App(props) {
//
//     return(
//         <main>
//             <Header title={props.title}/>
//             <section className="todo-list">
//                 <ToDo title={"Learn JS"} completed={true}/>
//                 <ToDo title={"Learn React"} completed={false}/>
//             </section>
//         </main>
//     )
// }
//
// App.propTypes ={
//     title: React.PropTypes.string.isRequired
// };
// App.defaultProps ={
//     title: 'ffhopopopffff'
// };
//
//
// ReactDOM.render(<App />, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-03  Валидация свойств
 */
//
// // если свойства не ередали, то ошибки не будет
// // в реакт можно определить какие имено свойста принемает компонент и какого типа данных
//
// // это можно сделать определив у компонента свойство propTypes
//
// //  передать число - {3}
//
// // у каждого типа данный объекта propTypes есть свойство isRequired
//
// // свойству можно определить значение по умолчанию на случай если они не будут переданы, для этого у компонента нужно определить свойство defaultProps
//
// function App(props) {
//     console.log(props);
//     return(
//         <main>
//             <header>
//                 <h1>{props.title}</h1>
//             </header>
//             <section className="todo-list">
//                 <div className="todo completed">
//                     <button className="checkbox icon">
//                         <i className="material-icons">check_box</i>
//                     </button>
//                     <span className="todo-title">Learn Java-Script</span>
//                     <button className="delete icon">
//                         <i className="material-icons">delete</i>
//                     </button>
//                 </div>
//             </section>
//
//             <section className="todo-list">
//                 <div className="todo">
//                     <button className="checkbox icon">
//                         <i className="material-icons">check_box_outline_blank</i>
//                     </button>
//                     <span className="todo-title">Learn React</span>
//                     <button className="delete icon">
//                         <i className="material-icons">delete</i>
//                     </button>
//                 </div>
//             </section>
//
//         </main>
//     )
// }
//
// App.propTypes ={
//   title: React.PropTypes.string.isRequired
// };
// App.defaultProps ={
//     title: 'ffffff'
// };
//
//
// ReactDOM.render(<App />, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-02  Свойства
 */

// //добавим динамики (properties)
// //props - это объект который представляет собой переданные компоненту свойства
//
// //чтобы опредетить JSX выражение нужно использовать {} - React принимет это как JS код
//
// // в скобках можно указать выражение (что-то возвращает -if and for не являются выражениями)
// //в js есть другие способы определения условных выражений и перебирать массивы
//
// //JSX выражение может встречаться в 2х местах : между тегами и в качестве значений для свойств
//
// function App(props) {
//     console.log(props);
//     return(
//         <main>
//             <header>
//                 <h1>{props.title}</h1>
//             </header>
//             <section className="todo-list">
//                 <div className="todo completed">
//                     <button className="checkbox icon">
//                         <i className="material-icons">check_box</i>
//                     </button>
//                     <span className="todo-title">Learn Java-Script</span>
//                     <button className="delete icon">
//                         <i className="material-icons">delete</i>
//                     </button>
//                 </div>
//             </section>
//
//             <section className="todo-list">
//                 <div className="todo">
//                     <button className="checkbox icon">
//                         <i className="material-icons">check_box_outline_blank</i>
//                     </button>
//                     <span className="todo-title">Learn React</span>
//                     <button className="delete icon">
//                         <i className="material-icons">delete</i>
//                     </button>
//                 </div>
//             </section>
//
//         </main>
//     )
// }
//
// ReactDOM.render(<App title="React todo"/>, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 02-01  Создание макета
 */

// function App() {
//     return(
//         <main>
//             <header>
//                 <h1>React TODO</h1>
//             </header>
//             <section className="todo-list">
//                 <div className="todo completed">
//                     <button className="checkbox icon">
//                         <i className="material-icons">check_box</i>
//                     </button>
//                     <span className="todo-title">Learn Java-Script</span>
//                     <button className="delete icon">
//                         <i className="material-icons">delete</i>
//                     </button>
//                 </div>
//             </section>
//
//             <section className="todo-list">
//                 <div className="todo">
//                     <button className="checkbox icon">
//                         <i className="material-icons">check_box_outline_blank</i>
//                     </button>
//                     <span className="todo-title">Learn React</span>
//                     <button className="delete icon">
//                         <i className="material-icons">delete</i>
//                     </button>
//                 </div>
//             </section>
//
//         </main>
//     )
// }
//
// ReactDOM.render(<App />, document.getElementById("root"));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 01-05  components
 */

// //До этого мы создавали рект элементы, которые являюся основой рект компонентов
// // на самом базовом уровне компонент представляет из себя ф-ю которая возвращаен JSX
// const title = React.createElement('h1', null, 'React TODO'),
//     subtitle = React.createElement('p', {className: 'subtitle'}, 'Это мое первое сообщение на React'),
//     container = React.createElement('div', null, title, subtitle);
//
//
//
//     function App() {
//         return (
//             <div>
//                 <h1>Rect TODO</h1>
//                 <p>Это мое первое сообщение на React</p>
//             </div>
//         );
//     }
//
//     // Компонент в метод рендер можно отправлять следующими способами:
//
// //Вызвать компонент
// ReactDOM.render(App(), document.getElementById('root'));
//
// //Через React.createElement
// // ReactDOM.render(React.createElement(App), document.getElementById('root'));
//
// //Через   React.createElement
// // ReactDOM.render(React.createElement(App), document.getElementById('root'))
//
// // с помощью JSX
// ReactDOM.render(<App />, document.getElementById('root'));

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 01-04  Virtual DOM
 */

// const title = React.createElement('h1', null, 'React TODO'),
//     subtitle = React.createElement('p', {className: 'subtitle'}, 'Это мое первое сообщение на React'),
//     container = React.createElement('div', null, title, subtitle),
//     // вместо container отправляем JSX
//   app = (
//         <div>
//            <h1>Rect TODO</h1>
//           <p>Это мое первое сообщение на React</p>
//         </div>
//     );
// console.log(title); // ревкт элемент - это простой элемент с набором свойств. Этот элемент предсталяет собой образ ДОМ элемента (Виртуальны йДОМ элемент)
//
// var dom = ReactDOM.render(container, document.getElementById('root')); // ReactDOM.render Генерирует настоящий
//
// console.log(dom);
/**
 * Lesson 01-03 end
 */

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 01-03  JSX
 */

// const title = React.createElement('h1', null, 'React TODO'),
//     subtitle = React.createElement('p', {className: 'subtitle'}, 'Это мое первое сообщение на React'),
//     container = React.createElement('div', null, title, subtitle),
//     // вместо container отправляем JSX
//     app = (
//         <div>
//            <h1>Rect TODO</h1>
//           <p>Это мое первое сообщение на React</p>
//         </div>
//     );
//
// ReactDOM.render(app, document.getElementById('root'));

/**
 * Lesson 01-03 end
 */

/**
 * ---------------------------------------------------------------------
 */
/**
 * Lesson 01-02 Первое приложение
 */
// const title = React.createElement('h1', null, 'React TODO'),
//     subtitle = React.createElement('p', {className: 'subtitle'}, 'Это мое первое сообщение на React'),
//     container = React.createElement('div', null, title, subtitle);
//
// ReactDOM.render(container, document.getElementById('root'));
/**
 * Lesson 01-02 end
 */

// import todos from './todos';
// import Header from './components/Header';
// import ToDo from './components/ToDo';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       todos : this.props.initialData
//     }
//   }
//
//   render() {
//     return (
//       <main>
//         <Header title={this.props.title} />
//
//         <section className="todo-list">
//           {this.state.todos.map(todo =>
//             <ToDo key={todo.id} title={todo.title} completed={todo.completed} />)
//           }
//         </section>
//       </main>
//     )
//   }
// }
//
// App.protoTypes = {
//   title       : React.PropTypes.string,
//   initialData : React.PropTypes.arrayOf(React.PropTypes.shape({
//     id        : React.PropTypes.number.isRequired,
//     title     : React.PropTypes.string.isRequired,
//     completed : React.PropTypes.bool.isRequired
//   })).isRequired
// }
//
// App.defaultProps = {
//   title : "React ToDo"
// }
//
// ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));
