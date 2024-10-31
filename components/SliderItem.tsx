import { View, Text } from 'react-native'
import React from 'react'
import { NewsDataType } from '@/types'

type Props = {
  slideItem: NewsDataType
}

const SliderItem = (props: Props) => {
  return (
    <View>
      <Text>SliderItem</Text>
    </View>
  )
}

export default SliderItem