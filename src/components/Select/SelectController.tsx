import { Controller, type Control } from "react-hook-form";
import { Categorias, type Categoria } from "../../service/type/Categorias";

type SelectProps = {
  name: string;
  control: Control<any>;
  label?: string;
  rules?: object;
};

export function SelectProps({ name, control, label, rules }: SelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
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
          <select
            {...field}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "14px",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          >
            {Object.values(Categorias).map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>
      )}
    />
  );
}
