import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  h1, h2, h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;

  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Form = styled.form`
  display: flex;
  flex-direction: column;

  input{
    border: 2px solid red;
    height: 38px;
    font-size: 14px;
    border-radius: 3.5px;
    margin-top: 33px;
    padding: 0 0 0 15px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.text};
  }
  input:placeholder{
    color: #A0A6CB;
  }

`
Widget.Button = styled.button`
  margin: ${props => props.margin};
  background-image: ${props => props.backgroundImage};
  background-color: ${props => props.backgroundColor};
  height: 38px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border-radius: 3.5px;
  cursor: pointer;

  :disabled {
    background-image: none;
    background-color: #3A4D6Dff;
    cursor: default;
  }
`;

Widget.AlternativeButton = (props) => {
  return(
    <Widget.Button
      disabled={props.disabled}
    >{props.children}</Widget.Button>
  );
}

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  color: #fff;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;