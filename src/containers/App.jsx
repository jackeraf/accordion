import React, { Component } from 'react';
import Accordion from '../components/Accordion/Accordion';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: [],
      numberOfSections: 4,
      curentClickedSectionNumber: null,
      toggleSelectedSection: false,
    };
  }

  componentWillMount() {
    const sections = [];
    for (let i = 0; i < this.state.numberOfSections; i += 1) {
      sections.push(Accordion);
    }
    this.setState({
      sections,
    });
  }

  handleClickSection(event, clickedNodeNumber) {
    const element = event.target.nextSibling;
    if (element.style.display === 'block') {
      this.setState({
        curentClickedSectionNumber: clickedNodeNumber,
        toggleSelectedSection: false,
      });
    } else {
      const sectionsOnClickResult = this.state.sections.map((el, i) => {
        if (i === clickedNodeNumber) {
          return <el show />;
        }
        return <el />;
      });
      this.setState({
        sections: sectionsOnClickResult,
        curentClickedSectionNumber: clickedNodeNumber,
        toggleSelectedSection: true,
      });
    }
  }

  render() {
    return (
      <div className="App-div">
        {this.state.sections.map((el, i) => {
          if (this.state.curentClickedSectionNumber === i) {
            return (<Accordion
              key={Date.now() + i}
              number={i}
              show={this.state.toggleSelectedSection}
              onSectionClick={event => this.handleClickSection(event, i)}
            />);
          }
          return (<Accordion
            key={Date.now() + i}
            number={i}
            show={false}
            onSectionClick={event => this.handleClickSection(event, i)}
          />);
        })}
      </div>
    );
  }
}

export default App;
