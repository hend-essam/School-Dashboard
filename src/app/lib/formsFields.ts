import { Field } from "@/types/interfaces";

const registrationFields: Field[] = [
  { label: "Username", name: "username" },
  { label: "Email", name: "email" },
  { label: "Password", name: "password" },
];

const profileFields: Field[] = [
  { label: "First Name", name: "firstName" },
  { label: "Last Name", name: "lastName" },
  { label: "Phone", name: "phone" },
];

const userDetailsFields: Field[] = [
  { label: "Address", name: "address" },
  { label: "Blood Type", name: "bloodType" },
  { label: "Birthday", name: "birthday", type: "date" },
];

const teacherFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const studentFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const parentFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const subjectFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const classFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const lessonFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const examFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const assignmentFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const resultFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const attendanceFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const eventFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

const announcmentFields: (Field | Field[])[] = [
  registrationFields,
  profileFields,
  userDetailsFields,
  [
    { label: "Sex", name: "sex", type: "select", options: ["male", "female"] },
    { label: "Upload a photo", name: "photo", type: "file" },
  ],
];

export const formsFields: Record<
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
  | "announcment",
  (Field | Field[])[]
> = {
  teacher: teacherFields,
  student: studentFields,
  parent: parentFields,
  subject: subjectFields,
  class: classFields,
  lesson: lessonFields,
  exam: examFields,
  assignment: assignmentFields,
  result: resultFields,
  attendance: attendanceFields,
  event: eventFields,
  announcment: announcmentFields,
};
