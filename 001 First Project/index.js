// ReactDOM.render(<h1 className="header">Hello, Everyone</h1>, document.getElementById("root"))

// ReactDOM.render(<p>Hi My Name is Bob !</p>, document.getElementById("root"))

// ReactDOM.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>, document.getElementById("root"))

// const h1 = document.createElement("h1")
// h1.textContent = "This is a Text"
// h1.className = "header"
// document.getElementById("root").append(h1)

const element = (
  <div>
    <img src="./image.png" width="60px"/>
    <h1>Fun Facts about React</h1>
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
