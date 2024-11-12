# School Dashboard

A comprehensive school management dashboard built with React and TypeScript, designed to facilitate seamless interactions and manage essential school operations efficiently. This dashboard enables school administrators and educators to handle various tasks, from managing teachers and students to scheduling and tracking key academic activities.

## Features

- **Teacher Management**: View, add, and edit teacher details in a paginated list, with quick actions available.
- **Student Management**: Organize student profiles, enrollment, and academic tracking.
- **Scheduling and Calendar**: Track and manage school events and schedules with an interactive calendar view.
- **Customizable Components**: Reusable UI components, such as `IconButton` and general forms, for consistent styling and improved maintainability.
- **Error Handling**: Zod validation for form fields, centralizing error handling for enhanced user feedback.
- **API Integration**: Real-time data fetching from backend endpoints, with `/list/teachers` as a primary data source for teachers' information.
  
## Tech Stack

- **React** with **TypeScript** for a robust and type-safe front-end experience.
- **Sass** for component styling, enhancing CSS modularity and maintainability.
- **Zod** for form validation, ensuring accurate user input and error management.
- **ESLint** with custom configurations, including disabled `@typescript-eslint/no-explicit-any` rule for flexibility.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/hend-essam/School-Dashboard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd School-Dashboard
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. **Manage Teachers**: Access the **Teachers List** page to view, add, or update teacher information.
2. **Calendar Management**: Open the calendar view to organize and monitor events, with custom scheduling options.
3. **Student and Class Management**: Track students’ academic progress and update records with ease (coming soon).

## Project Status

This project is actively in development, with ongoing enhancements to existing features and planned extensions for student and class management.
