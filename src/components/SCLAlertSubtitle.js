import React from 'react'
import PropTypes from 'prop-types'
import { View,  StyleSheet, Text } from 'react-native'
import variables from '../config/variables'

function SCLAlertSubtitle({ subtitle, subtitleContainerStyle = {}, subtitleStyle = {}}) {
  return (
    <View style={[styles.container, subtitleContainerStyle]}>
      <Text style={[styles.subtitle, subtitleStyle]}>
        {subtitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: variables.mediumFontSize,
    color: variables.subtitleColor,
    fontWeight: '300'
  }
})

export default SCLAlertSubtitle
