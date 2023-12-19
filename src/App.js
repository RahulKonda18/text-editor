import Editor from './components/Editor'
import './App.css'

const App = () => (
  <div className="bg">
    <div className="card">
      <div className="left">
        <h1 className="heading">Text Editor</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
      </div>
      <Editor />
    </div>
  </div>
)

export default App
