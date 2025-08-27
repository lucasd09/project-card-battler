import { FormInputBase } from "@/components/form/components/form-input-base";
import { fixedForwardRef } from "@/lib/react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, ForwardedRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { InputProps, InputRef } from "./types";

const InputBase = <TForm extends FieldValues>(
  {
    className,
    value: baseValue,
    label,
    onChange,
    name,
    children: _,
    form,
    description,
    isSkeleton,
    type = "text",
    labelClassName,
    ...props
  }: InputProps<TForm>,
  ref: ForwardedRef<InputRef>,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <FormInputBase
      name={name}
      form={form}
      description={description}
      label={label}
      isSkeleton={isSkeleton}
      labelClassName={labelClassName}
    >
      {({ field }) => {
        const value = form ? (field?.value ?? "") : baseValue;
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          onChange?.(event);
          field?.onChange(event);
        };

        const inputElement = (
          <input
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className,
            )}
            ref={ref}
            {...props}
            {...field}
            type={isPassword && showPassword ? "text" : type}
            value={value}
            onChange={handleChange}
          />
        );

        const Comp = isPassword ? (
          <div className="relative">
            {inputElement}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        ) : (
          inputElement
        );

        if (!label) {
          return Comp;
        }

        return <div className="space-y-1">{Comp}</div>;
      }}
    </FormInputBase>
  );
};

export const Input = fixedForwardRef(InputBase);
