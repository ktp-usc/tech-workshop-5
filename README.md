# KTP Tech Workshop #5 – Shadcn/UI Components

## Overview

This workshop introduces **Shadcn/UI**, a modern component library built on **Tailwind CSS** and **Radix UI**. Attendees learn how to install, style, and customize ready-to-use components such as buttons, dialogs, inputs, and carousels — all while maintaining accessibility and a clean, composable structure. The session concludes with open working time for hands-on experimentation and questions.

## Slides

* [Workshop #5 Slides](Tech%20workshop%205.pdf)

## URL

* Coming soon (will be linked once the workshop demo app is deployed)

---

## Prerequisites

* Node.js and npm
* React + Next.js project setup
* Code editor (WebStorm or VS Code recommended)
* Internet connection to access the Shadcn CLI

---

## Shadcn/UI

Shadcn/UI provides a growing library of accessible, themeable React components styled with Tailwind.
Each component can be edited and customized to fit your design system.

### Why Shadcn/UI?

* Fully customizable Tailwind styling
* Accessible components powered by **Radix UI**
* Beginner-friendly setup and clear documentation
* Works seamlessly with **TypeScript**

### Install

```bash
npx shadcn@latest init
```

Then add your desired components:

```bash
npx shadcn@latest add button carousel aspect-ratio dialog input label sonner
```

**Docs:** [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

---

## Example: Sonner (Toast Notifications)

The **Sonner** component provides an easy way to show important messages, such as success or error alerts.

### Features

* Lightweight and simple to use
* Several preconfigured variants:

  * Default
  * Success
  * Info
  * Warning
  * Error
  * Promise (async feedback)

### Why Use It?

Sonner is ideal for showing user feedback in form submissions, data loading, or API operations without disrupting the UI flow.

---

## Workshop Components

Attendees implemented and explored the following:

* **Button** – Styled action triggers with multiple variants
* **Dialog** – Modal popups for forms, alerts, or content
* **Input** – Tailwind-styled text and form inputs
* **Carousel** – Responsive image/content sliders with controls
* **Sonner** – Toast notification system

---

## Working Time + Questions

The second half of the workshop provided attendees with hands-on time to experiment, ask questions, and integrate Shadcn components into their ongoing project repositories.
