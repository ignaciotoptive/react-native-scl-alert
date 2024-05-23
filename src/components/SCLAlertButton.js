import React from 'react'
import PropTypes from 'prop-types'
import { View,  StyleSheet, Text, TouchableOpacity } from 'react-native'
import variables from '../config/variables'
import { themeType, defaultThemeType } from '../config/types'


function SCLAlertButton({
  containerStyle = {},
  textStyle = {},
  theme = defaultThemeType,
  children,
  onPress
}) {
  const childrenType = typeof children

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: variables[`${theme}Background`] },
          containerStyle
        ]}
      >
        {childrenType === 'string' && (
          <Text style={[styles.text, { color: variables[`${theme}Color`] }, textStyle]}>
            {children}
          </Text>
        )}
        {childrenType === 'object' && <View>{children}</View>}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: variables.gutter / 1.5,
    padding: variables.gutter / 1.5,
    borderRadius: variables.baseBorderRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: variables.baseFontSize,
    color: variables.white,
    fontWeight: '700'
  }
})

export default SCLAlertButton
