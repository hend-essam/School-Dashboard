"use client";
import {
  PlusIcon,
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import IconButton from "./IconButton";
import Form from "./Form";
import { formsFields } from "../lib/formsFields";

type TableType =
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcment";

type ModalType = "create" | "update" | "delete";

interface FormModalProps {
  table: TableType;
  type: ModalType;
  data?: Record<string, any>;
  id?: number;
}

const FormModal = ({ table, type, data, id }: FormModalProps) => {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <IconButton
        icon={
          type === "create"
            ? PlusIcon
            : type === "update"
            ? PencilSquareIcon
            : TrashIcon
        }
        className={
          type === "create"
            ? "bg-[#ffffa9]"
            : type === "update"
            ? "bg-[#c4cfff]"
            : "bg-[#ebcdb8]"
        }
        size={type === "create" ? "w-6 h-6" : "h-5 w-5"}
        color={
          type === "update" || type === "delete"
            ? "text-white"
            : "text-gray-500"
        }
        onClick={() => setOpen(true)}
        aria-label={
          type === "create" ? "Create" : type === "update" ? "Update" : "Delete"
        }
      />
      {open && (
        <div className="w-full h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-start justify-center overflow-y-auto">
          <div className="bg-white p-8 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] 2xl:w-[40%] my-9">
            {type === "delete" && id ? (
              <form className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium">
                  All data will be lost. Are you sure you want to delete this
                  {table}?
                </span>
                <button
                  type="button"
                  className="bg-[#d91d20] text-white py-2 px-4 rounded-md border-none w-max self-center"
                >
                  Delete
                </button>
              </form>
            ) : type === "create" || type === "update" ? (
              <Form
                onSubmit={() => console.log(`${table} form submitted`)}
                fields={formsFields[table]}
                buttonType={type}
                data={data}
                table={table}
              />
            ) : (
              "Form not Found!"
            )}
            <IconButton
              icon={XMarkIcon}
              className="absolute top-4 right-4"
              onClick={() => setOpen(false)}
              aria-label="Close Modal"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
