import {
  Button,
  IconButton,
  Badge
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Botao } from "../../types";

export function Botao(props: Botao) {
  const {
    to,
    badgeContent,
    icon,
    children,
    onClick,
    color = "primary",
    disabled = false,
  } = props;

  const commonProps = {
    color,
    onClick,
    disabled,
    ...(to ? { component: RouterLink, to } : {}),
  };

  if (props.iconOnly) {
    return (
      <IconButton {...commonProps}>
        {badgeContent !== undefined ? (
          <Badge badgeContent={badgeContent} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    );
  }

  return (
    <Button variant={props.variant ?? "contained"} {...commonProps}>
      {children}
    </Button>
  );
}
