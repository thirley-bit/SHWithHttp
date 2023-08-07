import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import Taro, {
  useRouter,
  getCurrentPages,
} from "@tarojs/taro";
import { useState, useEffect } from "react";
import "./NavTab.scss";

function NavTab(props) {
  // console.log(props)
  const router = useRouter();
  const page = getCurrentPages();
  const { needBackIcon, mainTitle } = props;
  const [navBarHeight, setNavBarHeight] = useState(0);
  useEffect(() => {
    getNavHeight();
  }, []);

  const getNavHeight = () => {
    let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
    let sysinfo = Taro.getSystemInfoSync(); // 获取设备系统对象
    let statusBarHeight = sysinfo.statusBarHeight; // 获取状态栏高度
    let menuBottonHeight = menuButtonObject.height; //获取胶囊顶部高度
    let menuBottonTop = menuButtonObject.top; // 获取胶囊距离顶部的高度
    let newNavBarHeight =
      statusBarHeight +
      menuBottonHeight +
      (menuBottonTop - statusBarHeight); //计算nav导航栏的高度
    setNavBarHeight(newNavBarHeight);
  };

  const goBackPage = () => {
    const current = page.findIndex(
      (item) => item.route == router.path.slice(1)
    );
    const url = page[current - 1].route;
    if (current > 1) {
    //   Taro.navigateTo({
    //     url: url.slice(0, 0).concat("/", url),
    //   });
    Taro.navigateBack({
        delta: 1,
    })
    } else {
      Taro.switchTab({
        url: url.slice(0, 0).concat("/", url),
      });
    }
  };
  return (
    <View className='NavTabs'>
      <View className='nav_custom_bar' style={{ height: ` ${navBarHeight}px` }}>
        <AtIcon
          className={`nav_custom_bar_back ${needBackIcon ? "" : "hidden"}`}
          value='chevron-left'
          color='#9a9a9a'
          onClick={() => {
            goBackPage();
          }}
        ></AtIcon>
        <Text className='nav_custom_bar_title'>{mainTitle}</Text>
        <View></View>
      </View>
    </View>
  );
}

export default NavTab;
