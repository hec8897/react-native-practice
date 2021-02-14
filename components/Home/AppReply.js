import React from 'react';
import { View, Text } from 'react-native';
import Style from './CommonStyled'

const {HashTag,FlexRow,BoldTit} = Style;

const AppReply = ({DATA, UserID, title}) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        marginBottom: 10,
      }}>
      <FlexRow>
        <BoldTit>좋아요</BoldTit>
        <BoldTit
          style={{
            marginLeft: 5,
            fontWeight: 'bold',
          }}>
          1,500 개
        </BoldTit>
      </FlexRow>
      <FlexRow
        style={{
          marginVertical: 5,
        }}>
        <BoldTit style={{marginRight: 10}}>{UserID}</BoldTit>
        <HashTag>#강릉</HashTag>
        <HashTag>#정동진</HashTag>
        <HashTag>#바다</HashTag>
      </FlexRow>

      <Text>{title}</Text>
      <Text
        style={{
          marginVertical: 5,
          color: '#999',
        }}>
        댓글 19개 모두 보기
      </Text>
    </View>
  );
};

export default AppReply;
