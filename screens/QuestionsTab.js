import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setActiveOption } from '../actions';
import { Theme, Layout } from '../config';
import { OptionCard, Button } from '../lib';

class QuestionsTab extends React.Component {
  static propTypes = {
    filteredOptions: PropTypes.arrayOf(PropTypes.shape),
    selectedContent: PropTypes.string,
    setActiveOption: PropTypes.func,
    selectedOption: PropTypes.number
  }

  renderContent = () => {
    const { filteredOptions, selectedContent } = this.props;
    if (selectedContent) {
      console.log('SELECTED CONTENT', selectedContent);
      return <Text>{selectedContent}</Text>;
    }

    return filteredOptions.map((option) => {
      return (
        <OptionCard
          key={option.id}
          onPress={() => {
            this.props.setActiveOption(option.id);
          }}
          content={option.title}
        />
      );
    });
  }

  renderButton = () => {
    const { selectedOption } = this.props;
    if (selectedOption && selectedOption !== -1) {
      return (
        <Button
          onPress={() => {
            this.props.setActiveOption(-1);
          }}
          width={60}
          label="INICIO"
        />
      );
    }

    return null;
  }

  render() {
    const styles = {
      container: {
        width: Layout.width,
        minHeight: Layout.height - 60,
        backgroundColor: Theme.Color.White,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Layout.isSmallDevice ? 15 : 30
      }
    };
    return (
      <ScrollView
        contentContainerStyle={styles.container}
      >
        {this.renderContent()}
        {this.renderButton()}
      </ScrollView>
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
