import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setActiveOption } from '../actions';
import { Layout, Theme } from '../config';

class QuestionsTab extends React.Component {
  static propTypes = {
    filteredOptions: PropTypes.array
  }

  renderContent = () => {
    const { filteredOptions, selectedContent } = this.props;
    if (selectedContent) {
      console.log('SELECTED CONTENT', selectedContent);
      return <Text>{selectedContent}</Text>;
    }

    return filteredOptions.map((option) => {
      return (
        <TouchableOpacity
          key={option.id}
          onPress={() => {
            this.props.setActiveOption(option.id);
          }}
        >
          <Text>
            {option.title}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  renderButton = () => {
    const { selectedOption } = this.props;
    if (selectedOption && selectedOption !== -1) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.setActiveOption(-1);
          }}
        >
          <Text>Atrás</Text>
        </TouchableOpacity>
      );
    }

    return null;
  }

  render() {
    const styles = {
      container: {
        flex: 1,
        backgroundColor: Theme.Color.White
      }
    };
    return (
      <View
        style={styles.container}
      >
        {this.renderContent()}
        {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    Agent: {
      filteredOptions,
      selectedContent,
      selectedOption,
      previousSelectedOption
    }
  } = state;

  return {
    filteredOptions,
    selectedContent,
    selectedOption,
    previousSelectedOption
  };
};

export default connect(mapStateToProps, { setActiveOption })(QuestionsTab);
