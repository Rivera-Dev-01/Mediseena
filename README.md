# Mediseena

A centralized digital platform for structured prescription digitization. Mediseena converts handwritten prescriptions into organized, secure, and accessible digital records using OCR technology — reducing misinterpretation and improving efficiency in healthcare management.

> Built by ITC C301-302I (Joshua Cyron Santos, Miggy Rivera, Stephane Aira Cayetano, Sonny Jr. Berdin) — José Rizal University.

## Features

- **Prescription Scanning** — Upload or capture handwritten prescriptions in PDF format
- **OCR Text Extraction** — OCR technology extracts text and identifies key details
- **Structured Information** — Converts unstructured text into organized, structured medical information
- **Review and Save** — Review the extracted information, then save the verified prescription
- **Download** — Download prescription information as PDF documents

## Tech Stack

| Layer     | Technology                                        |
| --------- | ------------------------------------------------- |
| Frontend  | React 19, Vite 8, Tailwind CSS v4                 |
| Backend   | Python, FastAPI *(scaffold — in progress)*        |
| Design    | Figma (see `docs/figma-mcp-codex.md`)             |

## Project Structure

```
├── frontend/                 # React + Vite + Tailwind app
│   ├── src/
│   │   ├── assets/           # Figma-exported images & SVG assets
│   │   ├── components/       # Reusable components (landing, etc.)
│   │   ├── pages/            # Page views
│   │   ├── context/          # React context (auth, etc.)
│   │   ├── hooks/            # Custom hooks
│   │   ├── services/         # API service layer
│   │   └── utils/            # Helpers & validators
│   └── index.html
├── backend/                  # Python FastAPI (scaffold)
│   ├── app/
│   │   ├── models/           # DB models (prescription, medication, user)
│   │   ├── routes/           # API routes (auth, prescriptions, export)
│   │   ├── schemas/          # Pydantic schemas
│   │   ├── services/         # OCR, extraction, export services
│   │   └── utils/
│   └── uploads/              # User prescription uploads (gitignored)
└── docs/
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Backend *(in progress)*

The FastAPI backend is scaffolded but not yet implemented. Setup steps will be added here once the API is functional.

## Scripts

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `npm run dev`      | Start the Vite dev server         |
| `npm run build`    | Build for production              |
| `npm run preview`  | Preview the production build      |

## License

© 2026 Mediseena ITC C301-302I. All rights reserved.