function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

class SuggestionGenerator extends React.Component {
  constructor() {
    super();
    this.state = {suggestion: this.generateNewSuggestion()};
    // Really, ES6?
    this.setNewSuggestion = this.setNewSuggestion.bind(this);
  }
  setNewSuggestion() {
    this.setState({suggestion: this.generateNewSuggestion()});
  }
  generateNewSuggestion() {
    var adjective = getRandomElement(WORDS['adjectives']);
    var noun = getRandomElement(WORDS['nouns']);
    return adjective + ' ' + noun;
  }
  render() {
    return (
      <div className="suggestion-box">
        <h2>Improv suggestion generator</h2>
        <div className="suggestion">{ this.state.suggestion }</div>
        <button className="btn btn-primary adjective-verb" onClick={this.setNewSuggestion}>GENERATE</button>
        <div className="options">
          <button className="btn adjective-verb">Adjective-Noun</button>
          <div className="btn-group" data-toggle="buttons">
            <label className="btn">
              <input type="checkbox" autocomplete="off"></input>
              Adjective-Noun
            </label>
            <label className="btn">
              <input type="checkbox" autocomplete="off"></input>
              Option 2
            </label>
            <label className="btn">
              <input type="checkbox" autocomplete="off"></input>
              Option 3
            </label>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <SuggestionGenerator />,
  document.getElementById('where-suggestion-box-goes')
);
