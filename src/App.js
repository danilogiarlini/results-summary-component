import "./App.css";

function App() {
  return (
    <body>
      <div className="score-card">
        <p>Your Result</p>
        <div className="score-circle">
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div>
        <h2>Summary</h2>
        <div className="reaction">
          <p>Reaction</p> <p>80</p> <p>/ 100</p>
        </div>
        <div className="memory">
          <p>Memory</p> <p>92</p> <p>/ 100</p>
        </div>
        <div className="verbal">
          <p>Verbal</p> <p>61</p> <p>/ 100</p>
        </div>
        <div className="visual">
          <p>Visual</p> <p>72</p> <p>/ 100</p>
        </div>
        <button>Continue</button>
      </div>
    </body>
  );
}

export default App;
