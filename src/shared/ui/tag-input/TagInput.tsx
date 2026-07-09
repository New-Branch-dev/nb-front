"use client";

import type { KeyboardEvent } from "react";

import { Chip, type ChipResponsiveSize } from "@shared/ui/chip/Chip";
import { inputBase } from "@shared/ui/input/Input.css";
import {
  chipRow,
  inputOnPrimary,
  removeMark,
  root,
} from "@shared/ui/tag-input/TagInput.css";

const DEFAULT_SEPARATORS = [","] as const;

const TAG_HINT_SUFFIX = "Enter나 쉼표(,)를 누르면 태그로 추가돼요";

const composePlaceholder = (placeholder?: string) =>
  placeholder ? `${placeholder} · ${TAG_HINT_SUFFIX}` : TAG_HINT_SUFFIX;

export type TagInputProps = {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  inputValue: string;
  onInputValueChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  /** 태그를 만드는 구분 키 (기본: 쉼표, 스페이스) */
  separators?: readonly string[];
  className?: string;
  /** 보라 배경 위에서 사용할 때 chip·input 색을 조정 */
  surface?: "default" | "onPrimary";
  chipResponsiveSize?: ChipResponsiveSize;
};

const splitBySeparators = (value: string, separators: readonly string[]) => {
  const pattern = new RegExp(
    `[${separators.map((sep) => sep.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")).join("")}]+`,
  );

  return value
    .split(pattern)
    .map((part) => part.trim())
    .filter(Boolean);
};

const dedupe = (values: string[]) => Array.from(new Set(values));

export const TagInput = ({
  tags,
  onTagsChange,
  inputValue,
  onInputValueChange,
  placeholder,
  name = "tag-input",
  separators = DEFAULT_SEPARATORS,
  className,
  surface = "default",
  chipResponsiveSize = "laptopMdPcLg",
}: TagInputProps) => {
  const addTags = (candidates: string[]) => {
    const additions = dedupe(
      candidates.filter((candidate) => candidate && !tags.includes(candidate)),
    );

    if (additions.length === 0) {
      return;
    }

    onTagsChange([...tags, ...additions]);
  };

  const removeTagAt = (index: number) => {
    onTagsChange(tags.filter((_, currentIndex) => currentIndex !== index));
  };

  const commitCurrentInput = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      addTags([trimmed]);
    }
    onInputValueChange("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (separators.includes(event.key) || event.key === "Enter") {
      event.preventDefault();
      commitCurrentInput();
      return;
    }

    if (event.key === "Backspace" && inputValue === "" && tags.length > 0) {
      onTagsChange(tags.slice(0, -1));
    }
  };

  const handleChange = (next: string) => {
    const hasSeparator = separators.some((sep) => next.includes(sep));
    if (!hasSeparator) {
      onInputValueChange(next);
      return;
    }

    addTags(splitBySeparators(next, separators));
    onInputValueChange("");
  };

  const inputClassName = [
    inputBase,
    surface === "onPrimary" ? inputOnPrimary : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={[root, className].filter(Boolean).join(" ")}>
      {tags.length > 0 ? (
        <ul className={chipRow}>
          {tags.map((tag, index) => (
            <li key={tag}>
              <Chip
                responsiveSize={chipResponsiveSize}
                surface={surface}
                selected
                aria-label={`${tag} 태그 제거`}
                onClick={() => removeTagAt(index)}
              >
                {tag}
                <span aria-hidden className={removeMark}>
                  ×
                </span>
              </Chip>
            </li>
          ))}
        </ul>
      ) : null}

      <input
        type="text"
        className={inputClassName}
        name={name}
        placeholder={composePlaceholder(placeholder)}
        aria-label={placeholder ?? TAG_HINT_SUFFIX}
        value={inputValue}
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
