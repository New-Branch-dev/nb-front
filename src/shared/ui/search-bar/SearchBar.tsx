"use client";

import type { FormEvent, InputHTMLAttributes } from "react";

import { input, inputWrap, root, searchIcon, searchIconImg } from "./SearchBar.css";

export type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  name?: string;
  "aria-label"?: string;
  className?: string;
  disabled?: boolean;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "name" | "placeholder" | "disabled"
  >;
};

export const SearchBar = ({
  value,
  onChange,
  onSubmit,
  placeholder = "검색어를 입력해주세요.",
  name = "search",
  "aria-label": ariaLabel = "검색",
  className,
  disabled = false,
  inputProps,
}: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(value);
  };

  const mergedClassName = [root, className].filter(Boolean).join(" ");

  return (
    <form
      className={mergedClassName}
      role="search"
      aria-label={ariaLabel}
      onSubmit={handleSubmit}
    >
      <span className={searchIcon} aria-hidden>
        <img src="/search-pupple.svg" alt="" className={searchIconImg} />
      </span>

      <div className={inputWrap}>
        <input
          {...inputProps}
          className={input}
          type="text"
          enterKeyHint="search"
          inputMode="search"
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </form>
  );
};
