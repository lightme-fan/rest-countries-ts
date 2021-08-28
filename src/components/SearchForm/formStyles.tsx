import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  margin-top: 143px;

  div {
    display: grid;
    gap: 54px;
    padding: 12px;

    div {
      grid-template-columns: 1fr 30%;
      @media (max-width: 489px) {
        grid-template-columns: 1fr;
      }
    }

    @media (min-width: 900px) {
      width: 98%;
      display: flex;
      justify-content: space-between;

      input {
        width: 100%;
      }

      select {
        width: 20%;
      }
    }
  }

  fieldset {
    padding: 0;
    border: 0;
  }

  input {
    width: 70%;
    font-size: 16px;
    padding: 16px;
    padding-left: 80px;
    border: none;
    border-radius: 7px;
    outline: 0;
    color: white;
    box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    background-image: url(${({ theme }: any) => theme.searchIcon});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 8% 50%;
    background-color: ${({ theme }: any) => theme.active};
    color: ${({ theme }: any) => theme.text};

    &:hover,
    &:focus {
      border: none;
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: ${({ theme }: any) => theme.text};
    }
  }

  select {
    padding: 17px;
    border: none;
    border-radius: 7px;
    box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    outline: 0;
    appearance: none;
    background-image: url(${({ theme }: any) => theme.upIcon});
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 90% 50%;
    background-color: ${({ theme }: any) => theme.active};
    color: ${({ theme }: any) => theme.text};

    & > option {
      border-radius: 7px;
      padding: 5px 0;
    }

    &::-ms-expand {
      display: none;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
`
