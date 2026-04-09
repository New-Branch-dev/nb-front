import styled from "@emotion/styled";

type ButtonStyleProps = {
  $variant?: "primary" | "ghost";
  $size?: "sm" | "md" | "lg";
  $fullWidth?: boolean;
};

export const Button = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 0.625rem;
  font-weight: 500;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;
  cursor: pointer;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  padding: ${({ $size = "md" }) => {
    if ($size === "sm") {
      return "0.4rem 0.75rem";
    }
    if ($size === "lg") {
      return "0.85rem 1.25rem";
    }
    return "0.625rem 1rem";
  }};

  font-size: ${({ $size = "md" }) => {
    if ($size === "sm") {
      return "0.875rem";
    }
    if ($size === "lg") {
      return "1rem";
    }
    return "0.9375rem";
  }};

  background: ${({ $variant = "primary" }) =>
    $variant === "primary" ? "#800080" : "transparent"};

  color: ${({ $variant = "primary" }) =>
    $variant === "primary" ? "#ffffff" : "#171717"};

  &:hover {
    opacity: 0.92;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
