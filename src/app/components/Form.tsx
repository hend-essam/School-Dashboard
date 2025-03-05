"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/types/interfaces";
import { errors } from "@/app/lib/errors";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface GeneralFormProps<T extends z.ZodTypeAny> {
  onSubmit: SubmitHandler<z.infer<T>>;
  fields: (Field | Field[])[];
  buttonType: "create" | "update";
  data?: z.infer<T>;
  table: string;
}

const Form = <T extends z.ZodTypeAny>({
  onSubmit,
  fields,
  buttonType,
  data,
  table,
}: GeneralFormProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Dynamically generate the schema based on the fields array
  const schema = z.object(
    fields.flat().reduce((acc, field) => {
      const fieldName = field.name as keyof typeof errors;
      acc[fieldName] = errors[fieldName] || z.any(); // Fallback to `z.any()` if no validation rule exists
      return acc;
    }, {} as Record<keyof typeof errors, z.ZodTypeAny>)
  );

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setValue,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  // Set default values for all fields
  useEffect(() => {
    if (data) {
      fields.flat().forEach((field) => {
        if (data[field.name]) {
          setValue(
            field.name as keyof z.infer<typeof schema>,
            data[field.name]
          );
        }
      });
    }
  }, [data, fields, setValue]);

  const handleFormSubmit: SubmitHandler<z.infer<typeof schema>> = async (
    data
  ) => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      setSubmitError(
        "An error occurred while submitting the form. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to render form fields
  const renderField = (field: Field, data?: any) => {
    const { label, name, type = "input", options } = field;
    const typedErrors = formErrors as Record<string, any>;

    return (
      <div
        key={name}
        className={`${
          type === "file" ? "justify-center pt-4" : null
        } flex flex-col w-full md:w-1/4 gap-2`}
      >
        <label
          className={`flex ${
            type === "file"
              ? "flex-row items-center cursor-pointer gap-1"
              : "flex-col"
          } text-xs text-gray-500`}
          htmlFor={name}
        >
          {type === "file" && <CloudArrowUpIcon className="h-8 w-8" />}
          {label}
        </label>
        {type === "input" && (
          <input
            id={name}
            defaultValue={data && data[name]}
            type="text"
            {...register(name as keyof z.infer<typeof schema>)}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          />
        )}
        {type === "date" && (
          <input
            id={name}
            defaultValue={
              data && data[name] ? data[name].toISOString().split("T")[0] : ""
            }
            type={type}
            {...register(name as keyof z.infer<typeof schema>)}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          />
        )}
        {type === "select" && options && (
          <select
            id={name}
            defaultValue={data && data[name]}
            {...register(name as keyof z.infer<typeof schema>)}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          >
            {options.map((option: any, index: any) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {type === "file" && (
          <input
            id={name}
            type="file"
            {...register(name as keyof z.infer<typeof schema>, {
              onChange: (e) => {
                if (e.target.files && e.target.files[0]) {
                  // Manually set the value for the file input
                  setValue(
                    name as keyof z.infer<typeof schema>,
                    e.target.files[0]
                  );
                }
              },
            })}
            className="hidden"
          />
        )}
        {typedErrors[name]?.message && (
          <p className="text-xs text-[#d91d20]">
            {typedErrors[name]?.message.toString()}
          </p>
        )}
      </div>
    );
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h1 className="text-xl font-semibold">
        {buttonType === "create" ? `Create a new ${table}` : `Update ${table}`}
      </h1>
      {fields.map((field, index) =>
        Array.isArray(field) ? (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between gap-8 w-full"
          >
            {field.map((subField) => renderField(subField, data))}
          </div>
        ) : (
          renderField(field)
        )
      )}
      {submitError && <p className="text-xs text-[#d91d20]">{submitError}</p>}
      <button
        type="submit"
        className="bg-blue-400 text-white p-2 rounded-md"
        disabled={isLoading}
      >
        {isLoading
          ? "Loading..."
          : buttonType === "create"
          ? "Create"
          : "Update"}
      </button>
    </form>
  );
};

export default Form;
