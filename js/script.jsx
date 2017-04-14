class SuggestionGenerator extends React.Component {
  render() {
    return (
      <div className="suggestion-box">
        <h2>Improv suggestion generator</h2>
        <div className="suggestion">THIS IS A SUGGESTION</div>
        <button className="btn btn-primary adjective-verb">GENERATE</button>
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
