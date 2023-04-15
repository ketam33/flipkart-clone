import React from 'react'
import  { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const ButtonedGroup = () => {
  return (
    <Component>
    <StyledButton >-</StyledButton>
    <Button >1</Button>
    <StyledButton >+</StyledButton>
    </Component>
  )
}

export default ButtonedGroup;