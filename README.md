# KnowledgeForge AI

## AI-Powered Industrial Knowledge Intelligence Platform

KnowledgeForge AI transforms unstructured industrial documents into actionable operational intelligence.

Industrial organizations rely on large volumes of safety manuals, maintenance documents, compliance standards, and operational procedures. Finding important information inside these documents manually is time-consuming and can lead to missed risks.

KnowledgeForge AI uses AI to analyze industrial documents and convert them into structured knowledge.

## Key Features

### AI Document Analysis

Upload a PDF and automatically extract:

- Document summary
- Safety requirements
- Maintenance activities
- Operational risks
- Important keywords
- Machines and equipment

### Intelligent Dashboard

The dashboard provides a high-level overview of the analyzed document, including:

- Safety requirements count
- Maintenance task count
- Identified risks
- Knowledge graph nodes
- Top risks
- Maintenance activities
- AI-generated document summary

### Knowledge Graph

The platform automatically creates relationships between important entities such as:

- Machines
- Components
- Energy sources
- Hazards
- Safety procedures
- Maintenance tasks

This allows users to understand relationships within complex industrial documentation.

### AI Document Chat

Users can ask questions about uploaded documents using natural language.

Example questions:

- What are the main hazards mentioned in this document?
- What safety procedures are required before maintenance?
- What energy sources are discussed?
- What are the main maintenance activities?

## Technology Stack

### Frontend

- React
- Vite
- React Router
- React Flow
- CSS

### Backend

- Python
- FastAPI
- Gemini API
- PDF text extraction

## System Architecture

```text
User
 |
 v
React Frontend
 |
 v
FastAPI Backend
 |
 +--> PDF Text Extraction
 |
 +--> Gemini AI Analysis
 |
 +--> Structured Document Intelligence
       |
       +--> Dashboard
       +--> Knowledge Graph
       +--> AI Chat
       +--> Compliance Insights
