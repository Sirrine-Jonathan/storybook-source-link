import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  border: 0;
  border-radius: 6px;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  background: linear-gradient(45deg, #052F5F, #005377);
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-smooth: always;
  h1 {
    margin-bottom: 25px;
  }
  h2 {
    border-bottom: 2px solid #F1A208;
    padding-bottom: 5px;
    color: #F1A208;
    font-weight: 400;
    
    span {
      font-family: courier;
      font-size: 0.6em;
      letter-spacing: 1.5px;
      anti
    }
    code {
      color: white;
      margin-left: 5px;
      font-size: 0.8em;
    }
  }
  h3 {
    font-size: 0.8em;
  }
`

export const Section = styled.div`
  padding: 5px 20px;
  background: #D5C67A;
  margin: 15px 0 0;
  border-radius: 6px;
`

export const Notes = styled.div`
    padding: 20px;
    margin-top: 15px;
    background: #06A77D;
    color: white;
    line-height: 1.5em;
    font-size: 1.2em;
    border-radius: 6px;
`