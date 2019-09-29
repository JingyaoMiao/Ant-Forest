/**
 * 章节: 07-02
 * 演示 Alert 功能的其他使用方法
 * FilePath: /07-02/Alert/other.js
 * @Parry
 */

Alert.alert(
    'Title of Alert',
    'Content of Alert',
    [
      {text: 'The First Button', onPress: () => console.log('rechange function after pressing')},
      {text: 'Cancel', onPress: () => console.log('rechange function after pressing'), style: 'cancel'},
      {text: 'Confirm', onPress: () => console.log('rechange function after pressing')},
    ],
    { cancelable: false }
  )