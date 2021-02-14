import styled from 'styled-components/native';

const Style = {
  IconStyle: styled.Image`
    height: 25px;
    width: 25px;
    resize-mode: contain;
    margin-right: 20px;
  `,
  TitleStyle: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 7px 6px;
  `,
  BoldTit: styled.Text`
    color: #222;
    font-size: 16px;
    font-weight: bold;
  `,
  HashTag: styled.Text`
    color: #00376b;
    margin-right: 3px;
  `,
  FlexRow: styled.View`
    flex-direction: row;
    align-items: center;
  `,
};

export default Style;
