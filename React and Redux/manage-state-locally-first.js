class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }

  this.handleChange = this.handleChange.bind(this);
  this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
    })

  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input 
          value = {this.state.input} 
          onChange = {this.handleChange}></input>
        <button 
          onClick = {this.submitMessage}
        >Submit</button>
        <ul>
        {
          this.state.messages.map((x,i) => {
            return <li key = {i}>{x}</li>
          })
        }
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};