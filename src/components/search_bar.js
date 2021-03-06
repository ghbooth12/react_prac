import React, { Component } from 'react';
// pull off property "Component" from React and save it to variable.
// const Component = React.Component;

// const SearchBar = () => {
//   return <input />; // React.createElement
// };
// functional component ---> class base component

// (11/25) component has its own constructor method.
class SearchBar extends Component {
  constructor(props) {
    super(props); // call the Component's constructor method

    // assign an object to state. the object has a property.
    this.state = { term: '' }; // user's search term will be recorded whenever the input is changed.
  }

  // This is how method on class is defined. (이게 바로 컴포넌트!)
  render() {
    // onChange는 그냥 바닐라 JS 코드. prop이라고 불린다.(property)
    // JS variable을 호출할때는 반드시 {} 사이에 넣어줘야한다.
    // return <input onChange={this.onInputChange} />;  // refactored

    // single line code면 {} 도 생략 가능.
    // return <input onChange={(event) => console.log(event.target.value)} />; // refactored

    // 여기처럼 argument가 한개일때는 괄호 생략 가능
    // return <input onChange={event => console.log(event.target.value)} />

    // (11/25) Use state
    // To just referece any JS variable, call it inside the { }.
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
      // Value of the input: { this.state.term } // div 택 안에 삽입.
    );
  }

  // // event handler: <on/handle><element name><event name>
  // // <whenever> the <Input> is <changed>, run the code.
  // onInputChange(event) {
  //   // console.log(event.target.value); // value 값만 보기
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
