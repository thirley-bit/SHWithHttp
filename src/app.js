import { Component } from 'react'
import './app.less'
// import "./mock/index.js"

class App extends Component {

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
