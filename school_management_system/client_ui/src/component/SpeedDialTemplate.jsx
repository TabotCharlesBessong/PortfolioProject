import React from "react";
import styled from "styled-components";
import { SpeedDialAction, SpeedDial } from "@mui/material";
import { Tune } from "@mui/icons-material";

const CustomSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #032803;

    &:hover {
      background-color: green;
    }
  }
`;

const SpeedDialTemplate = ({ actions }) => {
  return (
    <CustomSpeedDial
      ariaLabel="SpeedDial playground example"
      icon={<Tune />}
      direction="left"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.action}
        />
      ))}
    </CustomSpeedDial>
  );
};

export default SpeedDialTemplate;
