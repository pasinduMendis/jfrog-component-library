import Button from "./button"
import type { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Button>={
  title: "Components/Button",
  component: Button,
  argTypes: { 
  btnStyles:{control:"object"},
},
  
}
export default meta

type Story = StoryObj<typeof meta>

export const Default:Story={
args :{
  children:"test"
}}

export const ButtonColourRed :Story= {
  args :{
    children:"test",
    btnStyles:{background:"red"}
  }
}


/* export const ButtonColourRed :Story= Template.bind({})
ButtonColourRed.args = {
  btnBackground:"red"
}

export const CellBackground = Template.bind({})
CellBackground.args = {
  cellBackground:"#1E90FF"
} */


