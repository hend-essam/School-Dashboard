import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/types/interfaces";
import { errors } from "@/app/lib/errors";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

interface GeneralFormProps<T extends ZodTypeAny> {
  onSubmit: SubmitHandler<z.infer<T>>;
  fields: (Field | Field[])[];
  buttonType: "create" | "update";
  data?: any;
  table: string;
}

const Form = <T extends ZodTypeAny>({
  onSubmit,
  fields,
  buttonType,
  data,
  table,
}: GeneralFormProps<T>) => {
  // Dynamically generate the schema based on the fields array
  const schema = z.object(
    fields.flat().reduce((acc, field) => {
      const fieldName = field.name as keyof typeof errors;
      acc[fieldName] = errors[fieldName];
      return acc;
    }, {} as Record<keyof typeof errors, z.ZodTypeAny>)
  );

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  // Helper function to render form fields
  const renderField = (field: any, data?: any) => {
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
            {...register(name)}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          />
        )}
        {type === "date" && (
          <input
            id={name}
            defaultValue={data && data[name]}
            type="date"
            {...register(name)}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          />
        )}
        {type === "select" && options && (
          <select
            id={name}
            defaultValue={data && data[name]}
            {...register(name)}
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
            type={type}
            defaultValue={data && data[name]}
            hidden
            {...register(name)}
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
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
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
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {buttonType === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default Form;
