import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  toggleSelectedSection,
  clickedSectionNumber,
  sectionsToShow,
} from '../store/actions/action';
import Accordion from '../components/Accordion/Accordion';
import './App.scss';

class App extends Component {
  componentWillMount() {
    console.log('inside willmount');
    const sections = [];
    for (let i = 0; i < this.props.numberOfSections; i += 1) {
      sections.push(Accordion);
    }
    this.props.onSectionsToShow(sections);
  }

  handleClickSection(event, clickedNodeNumber) {
    const element = event.target.nextSibling;
    if (element.style.display === 'block') {
      this.props.onToggleSelectedSection(false);
      this.props.onClickedSectionNumber(clickedNodeNumber);
    } else {
      const sectionsOnClickResult = this.props.sections.map((el, i) => {
        if (i === clickedNodeNumber) {
          return <el show />;
        }
        return <el />;
      });
      this.props.onToggleSelectedSection(true);
      this.props.onClickedSectionNumber(clickedNodeNumber);
      this.props.onSectionsToShow(sectionsOnClickResult);
    }
  }

  render() {
    return (
      <div className="App-div">
        {this.props.sections.map((el, i) => {
          if (this.props.curentClickedSectionNumber === i) {
            return (<Accordion
              key={Date.now() + i}
              number={i}
              show={this.props.toggleSelectedSection}
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

const mapStateToProps = state => ({
  sections: state.sections,
  numberOfSections: state.numberOfSections,
  curentClickedSectionNumber: state.curentClickedSectionNumber,
  toggleSelectedSection: state.toggleSelectedSection,
});

const mapDispatchToProps = dispatch => ({
  onToggleSelectedSection: bool => dispatch(toggleSelectedSection(bool)),
  onClickedSectionNumber: clickedNodeNumber => dispatch(clickedSectionNumber(clickedNodeNumber)),
  onSectionsToShow: sections => dispatch(sectionsToShow(sections)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
