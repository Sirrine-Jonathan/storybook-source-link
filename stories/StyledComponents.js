import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  border: 0;
  border-radius: 3em;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  background: black;
  color: white;
  padding: 10px 20px;
  h1 {
    margin-bottom: 25px;
  }
  h2 {
    font-size: 0.9em;
    border-bottom: 2px solid red;
    padding-bottom: 5px;
    color: red;
    code {
      color: white;
      margin-left: 5px;
      font-size: 1.4em;
    }
  }
  h3 {
    font-size: 0.8em;
  }
`

export const Section = styled.div`
  padding: 5px 20px;
  background: #eee;
  margin: 15px 0 0;
`

export const Notes = styled.div`
    padding: 20px;
    margin-top: 15px;
    background: blue;
    color: white;
    line-height: 1.5em;
    font-size: 1.2em;
`