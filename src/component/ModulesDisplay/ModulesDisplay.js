import { View, Navigator, Image, Text } from "@tarojs/components";
import "./ModulesDisplay.scss";

function ModulesDisplay(props) {
  const { title, list } = props;
  return (
    <View className='head'>
      <Text className='text'>{title}</Text>
      <View>
        {list.map((item, index) => {
          return (
            <View className='formItem' key={index}>
              <Navigator url={`${item.pageUrl}`}>
                <View className='img'>
                  <Image className='image' src={item.img} />
                </View>
                <View className='title'>{item.title}</View>
              </Navigator>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default ModulesDisplay;
