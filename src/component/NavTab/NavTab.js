import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { isFunction, getSystemInfo } from "../../utils/util";
import "./NavTab.scss";

let globalSystemInfo = getSystemInfo();

function NavTab(props) {
  console.log(props)
  const {
    title,
    background,
    backgroundColorTop,
    back,
    home,
    iconTheme,
    extClass,
  } = props;
  const {
    statusBarHeight,
    navBarHeight,
    capsulePosition,
    navBarExtendHeight,
    ios,
    windowWidth,
  } = globalSystemInfo;
  const rightDistance = windowWidth - capsulePosition.right; //胶囊按钮右侧到屏幕右侧的边距
  const [navBarLeft, setNavBarLeft] = useState([]);
  const [navigationbarinnerStyle, setNavigationbarinnerStyle] = useState([]);
  const [navBarCenter, setNavBarCenter] = useState(null);
  useEffect(() => {
    getNavSystemInfo();
    if (title) {
      setNavBarCenter(<text>{title}</text>);
    } else {
      setNavBarCenter(props.renderCenter);
    }
  }, []);
  const getNavSystemInfo = () => {
    let leftWidth = windowWidth - capsulePosition.left; //胶囊按钮左侧到屏幕右侧的边距
    let newNavigationbarinnerStyle = [
      `height:${navBarHeight + navBarExtendHeight}px`,
      `padding-top:${statusBarHeight}px`,
      `padding-right:${leftWidth}px`,
      `padding-bottom:${navBarExtendHeight}px`,
    ].join(";");
    setNavigationbarinnerStyle(newNavigationbarinnerStyle);
    if ((back && !home) || (!back && home)) {
      setNavBarLeft(
        [
          `width:${capsulePosition.width}px`,
          `height:${capsulePosition.height}px`,
          `margin-left:0px`,
          `margin-right:${rightDistance}px`,
        ].join(";")
      );
    } else if ((back && home) || title) {
      setNavBarLeft(
        [
          `width:${capsulePosition.width}px`,
          `height:${capsulePosition.height}px`,
          `margin-left:${rightDistance}px`,
        ].join(";")
      );
    } else {
      setNavBarLeft([`width:auto`, `margin-left:0px`].join(";"));
    }
  };

  const handleGoHomeClick = () => {
    if (isFunction(props.onHome)) {
      props.onHome();
    }
  };
  const handleBackClick = () => {
    if (isFunction(props.onBack)) {
      props.onBack();
    } else {
      const pages = Taro.getCurrentPages();
      if (pages.length >= 2) {
        Taro.navigateBack({
          delta: props.delta,
        });
      }
    }
  };
  return (
    <View className='nav-tab'>
    <View
      className={`lzh-nav-bar ${ios ? "ios" : "android"} ${extClass}`}
      style={`background: ${
        backgroundColorTop ? backgroundColorTop : background
      };height:${navBarHeight + navBarExtendHeight}px;`}
    >
      <View
        className={`lzh-nav-bar__placeholder ${ios ? "ios" : "android"}`}
        style={`padding-top: ${navBarHeight + navBarExtendHeight}px;`}
      />
      <View
        className={`lzh-nav-bar__inner ${ios ? "ios" : "android"}`}
        style={`background:${background};${navigationbarinnerStyle};`}
      >
        <View className='lzh-nav-bar__left' style={navBarLeft}>
          {back && !home && (
            <View
              onClick={() => handleBackClick()}
              className={`lzh-nav-bar__button lzh-nav-bar__btn_goback ${iconTheme}`}
            />
          )}
          {!back && home && (
            <View
              onClick={() => handleGoHomeClick()}
              className={`lzh-nav-bar__button lzh-nav-bar__btn_gohome ${iconTheme}`}
            />
          )}
          {back && home && (
            <View className={`lzh-nav-bar__buttons ${ios ? "ios" : "android"}`}>
              <View
                onClick={() => handleBackClick()}
                className={`lzh-nav-bar__button lzh-nav-bar__btn_goback ${iconTheme}`}
              />
              <View
                onClick={handleGoHomeClick}
                className={`lzh-nav-bar__button lzh-nav-bar__btn_gohome ${iconTheme}}`}
              />
            </View>
          )}
          {!back && !home && props.renderLeft}
        </View>
        <View
          className='lzh-nav-bar__center'
          style={`padding-left: ${rightDistance}px`}
        >
          {navBarCenter}
        </View>
        <View
          className='lzh-nav-bar__right'
          style={`margin-right: ${rightDistance}px`}
        >
          {props.renderRight}
        </View>
      </View>
    </View>
    </View>
  );
  //   );
}

export default NavTab;
