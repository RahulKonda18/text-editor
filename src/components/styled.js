import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 2px solid #cbd5e1;
  border-radius: 15px;
`
export const Element = styled.li``

export const EditContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  color: white;
  border-bottom: 2px solid #cbd5e1;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
`
export const TextAreaElement = styled.textarea`
  height: 100%;
  width: 100%;
  color: #cbd5e1;
  font-size: 20px;
  padding: 25px;
  background-color: transparent;
  border: solid transparent;
  text-decoration: ${props => (props.u ? 'underline' : 'normal')} !important;
  font-style: ${props => (props.i ? 'italic' : 'normal')};
  font-weight: ${props => (props.b ? 'bold' : 'normal')};
`
export const BoldButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  font-weight: bold;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: transparent;
  font-style: italic;
  cursor: pointer;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  text-decoration: underline;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`
