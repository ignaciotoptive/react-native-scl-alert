import React from 'react'
import PropTypes from 'prop-types'
import { View,  StyleSheet, Text } from 'react-native'
import variables from '../config/variables'

function SCLAlertTitle({ title, titleContainerStyle = {}, titleStyle = {}}) {
  return (
    <View style={[styles.container, titleContainerStyle]}>
      <Text style={[styles.text, titleStyle]}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: variables.gutter
  },
  text: {
    textAlign: 'center',
    fontSize: variables.largeFontSize,
    color: variables.textColor,
    fontWeight: '300'
  }
})

export default SCLAlertTitle
