import styled from 'styled-components';
import { IonPage } from '@ionic/react';

export const Wrapper = styled(IonPage)`
  .avatar-col {
    padding-top: 5rem;
  }
  .avatar {
    margin: 0 auto;
  }
  .sign-in-title {
    text-align: center;
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .inputs {
    padding: 2rem 2rem 2rem 2rem;
  }

  .input-label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-icon {
    padding-right: 5px;
  }
  .forgot-password {
    float: right;
    font-weight: 300;
    font-size: 13px;
    padding: 10px;
  }

  .sign-in-with {
    text-align: center;
    font-weight: 300;
    font-size: 18px;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
  }

  .social-icon {
    height: 4rem;
    font-size: 2.5rem;
    color: grey;
    display: flex;
    justify-content: center;
  }

  .button-row {
    padding-top: 2rem;
  }

  .sign-up-button {
    color: black;
    border-radius: 20px;
    border: 1px solid black;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.1rem;
    margin-left: 2rem;
    padding: 0 1rem;

    &:hover {
      background: black;
      color: white;
    }
  }

  .sign-in-button {
    background: black;
    color: white;
    border-radius: 20px;
    border: 1px solid black;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.1rem;
    margin-right: 2rem;
    padding: 0 1rem;

    &--background-hover {
      background: white;
      color: black;
    }
  }

  .sign-up-footer {
    width: 100%;
    position: absolute;
    bottom: 1rem;
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    color: grey;
    text-decoration: underline;
    cursor: pointer;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
