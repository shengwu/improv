function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomElementFromEither(arr1, arr2) {
  var n = Math.floor(Math.random() * (arr1.length + arr2.length));
  if (n >= arr1.length) {
    return arr2[n - arr1.length];
  }
  return arr1[n];
}

class SuggestionGenerator extends React.Component {
  constructor() {
    super();
    this.state = {suggestion: this.generateSingleWordSuggestion()};
    // Really, ES6?
    this.setSingleWordSuggestion = this.setSingleWordSuggestion.bind(this);
    this.setAdjectiveAndNounSuggestion = this.setAdjectiveAndNounSuggestion.bind(this);
  }

  setSingleWordSuggestion() {
    this.setState({suggestion: this.generateSingleWordSuggestion()});
  }
  setAdjectiveAndNounSuggestion() {
    this.setState({suggestion: this.generateAdjectiveAndNounSuggestion()});
  }
  generateSingleWordSuggestion() {
    return randomElementFromEither(WORDS['adjectives'], WORDS['nouns']);
  }
  generateAdjectiveAndNounSuggestion() {
    var adjective = randomElement(WORDS['adjectives']);
    var noun = randomElement(WORDS['nouns']);
    return adjective + ' ' + noun;
  }

  render() {
    return (
      <div className="suggestion-box">
        <h2>Improv suggestion generator</h2>
        <div className="suggestion">{ this.state.suggestion }</div>
        <button className="btn btn-primary" onClick={ this.setSingleWordSuggestion }>SINGLE WORD</button>
        <button className="btn btn-info" onClick={ this.setAdjectiveAndNounSuggestion }>ADJECTIVE + NOUN</button>
      </div>
    );
  }
}

ReactDOM.render(
  <SuggestionGenerator />,
  document.getElementById('where-suggestion-box-goes')
);
