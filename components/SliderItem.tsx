import { View, Text } from 'react-native'
import React from 'react'
import { NewsDataType } from '@/types'

type Props = {
  slideItem: NewsDataType
}

const SliderItem = (props: Props) => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default SliderItem