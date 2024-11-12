import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am an h1 tag."),
//     React.createElement("h2", {}, "I am an h2 tag."),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an h1 tag."),
//     React.createElement("h2", {}, "I am an h2 tag."),
//   ]),
// ]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

const spanElement = <span>Span Element JSX!</span>;

const headingElement = <h1 id="heading">Heading Element JSX!</h1>;

const TitleComponent = () => (
  <h1 id="heading" tabIndex="5">
    {spanElement}
    <br />
    Title Component!
  </h1>
);

// const HeadingComponent = () => {
//   return (
//     <h1 id="heading" className="heading">
//       Functional Component!
//     </h1>
//   );
// };

const HeadingComponent2 = () => (
  <div id="container">
    {headingElement}
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent></TitleComponent>
    <h1 id="heading" className="heading">
      Heading Component!
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
