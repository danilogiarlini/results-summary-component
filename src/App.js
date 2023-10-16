import "./App.css";
import reactionIcon from "./images/icon-reaction.svg";
import memoryIcon from "./images/icon-memory.svg";
import visualIcon from "./images/icon-visual.svg";
import verbalIcon from "./images/icon-verbal.svg";

function App() {
  return (
    <body>
      <div className="score-card">
        <p className="result">Your Result</p>
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
      <div className="summary-section">
        <h2>Summary</h2>
        <div className="reaction">
          <img src={reactionIcon} alt="lightning" />
          <p>Reaction</p> <p>80</p> <p>/ 100</p>
        </div>
        <div className="memory">
          <img src={memoryIcon} alt="brain" />
          <p>Memory</p> <p>92</p> <p>/ 100</p>
        </div>
        <div className="verbal">
          <img src={verbalIcon} alt="comic" />
          <p>Verbal</p> <p>61</p> <p>/ 100</p>
        </div>
        <div className="visual">
          <img src={visualIcon} alt="eye" />
          <p>Visual</p> <p>72</p> <p>/ 100</p>
        </div>
        <button>Continue</button>
      </div>
    </body>
  );
}

export default App;
