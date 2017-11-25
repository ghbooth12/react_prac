import React, { Component } from 'react';
// pull off property "Component" from React and save it to variable.
// const Component = React.Component;

// const SearchBar = () => {
//   return <input />; // React.createElement
// };
// functional component ---> class base component

class SearchBar extends Component {
  // This is how method on class is defined.
  render() {
    // onChange는 그냥 바닐라 JS 코드. prop이라고 불린다.(property)
    // JS variable을 호출할때는 반드시 {} 사이에 넣어줘야한다.
    // return <input onChange={this.onInputChange} />;  // refactored

    // single line code면 {} 도 생략 가능.
    // return <input onChange={(event) => console.log(event.target.value)} />; // refactored

    // 여기처럼 argument가 한개일때는 괄호 생략 가능
    return <input onChange={event => console.log(event.target.value)} />
  }

  // // event handler: <on/handle><element name><event name>
  // // <whenever> the <Input> is <changed>, run the code.
  // onInputChange(event) {
  //   // console.log(event.target.value); // value 값만 보기
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
