import React from "react";
import ReactDOM from "react-dom/client";

// --------------------------------------------------
// Testing (START)
// --------------------------------------------------

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

// --------------------------------------------------
// Testing (END)
// --------------------------------------------------

// --------------------------------------------------
// HomeWork (START)
// --------------------------------------------------

// const element = React.createElement(
//   "div",
//   { className: "title" },
//   React.createElement("h1", null, "Main Title"),
//   React.createElement("h2", null, "Subtitle"),
//   React.createElement("h3", null, "Sub-subtitle")
// );

// const element = (
//   <div className="title">
//     <h1>Main Title</h1>
//     <h2>Subtitle</h2>
//     <h3>Sub-subtitle</h3>
//   </div>
// );

// const NestedHeaders = () => (
//   <div className="title">
//     <h1>Main Title</h1>
//     <h2>Subtitle</h2>
//     <h3>Sub-subtitle</h3>
//   </div>
// );

// const NestedHeadersWithProps = () => (
//   <div className="title">
//     <h1 style={{ color: 'blue' }}>Main Title</h1> {/* Passing inline styles */}
//     <h2 id="subtitle">Subtitle</h2> {/* Adding an id */}
//     <h3 className="subheading" title="This is a subtitle">Sub-subtitle</h3> {/* Adding title and class */}
//   </div>
// );

// const HeaderComponent = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="/path/to/logo.png" alt="Logo" /> {/* Replace with actual logo */}
//       </div>

//       <div className="search-bar">
//         <input type="text" placeholder="Search..." />
//       </div>

//       <div className="user-icon">
//         <img src="/path/to/user-icon.png" alt="User" /> {/* Replace with actual user icon */}
//       </div>
//     </header>
//   );
// };

// --------------------------------------------------
// HomeWork (END)
// --------------------------------------------------

// const HeadingComponent = () => {
//   return (
//     <h1 id="heading" className="heading">
//       Functional Component!
//     </h1>
//   );
// };

const spanElement = <span>Span Element JSX!</span>;

const headingElement = <h1 id="heading">Heading Element JSX!</h1>;

const TitleComponent = () => (
  <h1 id="heading" tabIndex="5">
    {spanElement}
    <br />
    Title Component!
  </h1>
);

const HeadingComponent = () => (
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

root.render(<HeadingComponent />);
