import styled from 'styled-components';

interface ContainerProps{
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }


  border: 2px solid ${(props)=> 
    props.isFocused 
    ? '#ff9000'
    : '#f0f0f5'
  };

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props)=> 
      props.isFocused || props.isFilled
      ? '#ff9000'
      : '#b7b7cc'
    };

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
