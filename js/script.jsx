function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomElementFromEither(arr1, arr2) {
  const n = Math.floor(Math.random() * (arr1.length + arr2.length));
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
    this.setEmotionSuggestion = this.setEmotionSuggestion.bind(this);
    this.setEmotionAndAnimalJobSuggestion = this.setEmotionAndAnimalJobSuggestion.bind(this);
  }

  setSingleWordSuggestion() {
    this.setState({suggestion: this.generateSingleWordSuggestion()});
  }
  setAdjectiveAndNounSuggestion() {
    this.setState({suggestion: this.generateAdjectiveAndNounSuggestion()});
  }
  setEmotionSuggestion() {
    this.setState({suggestion: this.generateEmotionSuggestion()});
  }
  setEmotionAndAnimalJobSuggestion() {
    this.setState({suggestion: this.generateEmotionAndAnimalJobSuggestion()});
  }

  generateSingleWordSuggestion() {
    return randomElementFromEither(WORDS['adjectives'], WORDS['nouns']);
  }
  generateAdjectiveAndNounSuggestion() {
    const adjective = randomElement(WORDS['adjectives']);
    const noun = randomElement(WORDS['nouns']);
    return adjective + ' ' + noun;
  }
  generateEmotionSuggestion() {
    return randomElement(WORDS['emotions']);
  }
  generateEmotionAndAnimalJobSuggestion() {
    const emotion = randomElement(WORDS['emotions']);
    const animalOrJob = randomElementFromEither(WORDS['animals'], WORDS['jobs']);
    return emotion + ' ' + animalOrJob;
  }

  render() {
    return (
      <div className="suggestion-box">
        <div className="suggestion">{ this.state.suggestion }</div>
        <button className="btn btn-primary" onClick={ this.setSingleWordSuggestion }>SINGLE WORD</button>
        <button className="btn btn-warning" onClick={ this.setAdjectiveAndNounSuggestion }>ADJECTIVE + NOUN</button>
        <button className="btn btn-info" onClick={ this.setEmotionSuggestion }>EMOTION</button>
        <button className="btn btn-success" onClick={ this.setEmotionAndAnimalJobSuggestion }>EMOTION + ANIMAL/JOB</button>
      </div>
    );
  }
}

ReactDOM.render(
  <SuggestionGenerator />,
  document.getElementById('where-suggestion-box-goes')
);
