import { useState } from "react";
import "./styles.css";
const bookSF = {
  javascript: [
    { name: "Eloquent JavaScript", artist: "Marijn Haverbeke" },

    { name: "You Don't Know JS", artist: "Kyle Simpson" }
  ],

  fiction: [
    {
      name: "The Lord of the Rings",
      artist: "J.R.R. Tolkien"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      artist: "J. K. Rowling"
    }
  ],
  trading: [
    {
      name: "The Little Book that Still Beats the Market",
      artist: "Joel Greenblatt"
    },
    {
      name: "The Intelligent Investor",
      artist: "Benjamin Graham"
    }
  ]
};

export default function App() {
  const [selectGener, setGener] = useState("trading");
  function clickHandler(gener) {
    setGener(gener);
  }

  return (
    <div className="App">
      <h1>
        Good{" "}
        <span role="img" aria-label="books">
          📚
        </span>{" "}
        Books
      </h1>
      <p style={{ fontSize: "smaller" }}>
        checkout my favourite book.. select a gener to started
      </p>
      <div>
        {Object.keys(bookSF).map((gener) => (
          <button key={gener} onClick={() => clickHandler(gener)}>
            {gener}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookSF[selectGener].map((book) => (
            <li key={book.name}>
              <div style={{ fontSize: "larger" }}>{book.name}</div>
              <br />
              <div style={{ fontsize: "smaller" }}>{book.artist}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
