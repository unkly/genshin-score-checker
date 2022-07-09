import { css } from '@emotion/css'

export function useStyles() {
  const title = css`
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
  `

  const input = css`
    border: 1.5px solid grey;
    padding: 8px;
    border-radius: 8px;
    outline: none;
    margin-left: 64px;
  `

  const label = css`
    font-size: 24px;
    margin-left: 64px;
  `

  const container = css`
    display: flex;
  `

  const button = css`
    color: blue;
    background-color: transparent;
    border: 1.5px solid grey;
    border-radius: 8px;
    margin-left: 645px;
    margin-top: 40px;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
  `

  const result = css`
    display: flex;
    font-size: 24px;
    letter-spacing: 2px;
    margin-left: 60px;
  `

  return {
    title,
    input,
    label,
    container,
    button,
    result,
  }
}
