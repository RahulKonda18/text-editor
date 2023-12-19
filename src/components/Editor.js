import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  InputContainer,
  EditContainer,
  TextAreaElement,
  BoldButton,
  Element,
  ItalicButton,
  UnderlineButton,
} from './styled'

class Editor extends Component {
  state = {bold: false, italic: false, underline: false, input: ''}

  onChangeInput = e => {
    this.setState({input: e.target.value})
  }

  toggleItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  toggleUnderline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  toggleBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  render() {
    const {bold, italic, underline, input} = this.state
    console.log(bold, italic, underline)
    return (
      <InputContainer>
        <EditContainer>
          <Element>
            <BoldButton
              onClick={this.toggleBold}
              bold={bold}
              data-testid="bold"
            >
              <VscBold size={25} />
            </BoldButton>
          </Element>
          <Element>
            <ItalicButton
              onClick={this.toggleItalic}
              italic={italic}
              data-testid="italic"
            >
              <GoItalic size={25} />
            </ItalicButton>
          </Element>
          <Element>
            <UnderlineButton
              onClick={this.toggleUnderline}
              underline={underline}
              data-testid="underline"
            >
              <AiOutlineUnderline size={25} />
            </UnderlineButton>
          </Element>
        </EditContainer>
        <TextAreaElement
          onChange={this.onChangeInput}
          value={input}
          b={bold}
          i={italic}
          u={underline}
        />
      </InputContainer>
    )
  }
}

export default Editor
