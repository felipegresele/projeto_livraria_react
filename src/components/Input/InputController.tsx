import type { InputHTMLAttributes } from "react";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

type InputProps<FT extends FieldValues> = {
  name: Path<FT>;
  control: Control<FT>;
  rules?: object;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputController<FT extends FieldValues>({
  name,
  control,
  rules,
  label,
  ...rest
}: InputProps<FT>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            color: "#333",
          }}
        >
          {label && (
            <span
              style={{
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              {label}
            </span>
          )}
          <input
            {...field}
            {...rest}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: fieldState.error ? "1px solid #ff4d4f" : "1px solid #ccc",
              fontSize: "14px",
              transition: "border-color 0.2s",
              outline: "none",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#0070f3")}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = fieldState.error ? "#ff4d4f" : "#ccc")
            }
          />
          {fieldState.error && (
            <p
              style={{
                color: "#ff4d4f",
                marginTop: "0.5rem",
                fontSize: "12px",
              }}
            >
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    />
  );
}
