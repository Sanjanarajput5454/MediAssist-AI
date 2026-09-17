# MediAssist AI - Comprehensive Healthcare Assistant (HC-02)

MediAssist AI is an intelligent web application built for problem statement **HC-02** (AI-powered medical assistant to support preliminary diagnosis and healthcare guidance). The platform bridges the gap between raw patient health data and physician consultations by providing preliminary triage, multimodal report simplification, vitals tracking, drug interaction checks, and automated doctor visit summaries.

---

## 🌟 Key Features

* **Symptom Triage & Interactive Assistant**:
  * **Guided Symptom Checklist**: Collects chief complaints, severity (1–10), duration, onset, and anatomical location[cite: 2].
  * **Voice Dictation**: Web Speech API integration for hands-free speech-to-text symptom input[cite: 2].
  * **AI Risk Categorization**: Classifies symptoms into `LOW RISK`, `MODERATE RISK`, `HIGH RISK`, or `IMMEDIATE EMERGENCY`[cite: 2].
  * **Emergency Direct Dial**: Immediate banner alerts with direct links to call emergency services (108 / 911) when high-risk conditions are flagged[cite: 2].
  * **Specialist Matching**: Recommends appropriate medical specialists based on symptom context[cite: 2].

* **Multimodal Medical Report Analyzer**:
  * **OCR & Vision Support**: Upload lab report images or paste clinical text (e.g., CBC, Lipid Panel, HbA1c)[cite: 2].
  * **Abnormal Value Flagging**: Automatically identifies out-of-range metrics and translates clinical jargon into accessible language[cite: 2].

* **Vitals Tracker & Analytics**:
  * **Biometric Journaling**: Tracks Systolic/Diastolic BP, Heart Rate, SpO2 Oxygen, Blood Sugar, and Body Temperature[cite: 2].
  * **Interactive Charting**: Visualizes time-series trends using Chart.js[cite: 2].
  * **Automated Rule Engine**: Generates immediate clinical threshold alerts for conditions like Stage 2 Hypertension, Hypoxia, or Fever[cite: 2].

* **Medication Safety & Interaction Checker**:
  * **Digital Cabinet**: Maintains an active list of personal medications[cite: 2].
  * **Interaction Analysis**: Checks for potential drug-drug interactions, side effect warnings, and dietary precautions[cite: 2].

* **Doctor Visit Brief Exporter**:
  * **One-Click PDF/Print Summary**: Consolidates triage history, latest vitals, active medications, and suggested questions for your doctor into a clean, printable pre-consultation document[cite: 2].

---

## 🛠️ Tech Stack

* **Frontend Framework**: HTML5, Tailwind CSS (via CDN)[cite: 2]
* **Typography & Icons**: Google Inter Font, FontAwesome 6[cite: 2]
* **AI & NLP Engine**: Google Gemini API (`gemini-3-flash-preview`) for multimodal parsing and conversation[cite: 2]
* **Data Visualization**: Chart.js[cite: 2]
* **Browser APIs**: Web Speech API (Voice Dictation), LocalStorage API (Data Persistence), Window Print API[cite: 2]

---

## 🚀 Quick Start & Installation

### Prerequisites
* Any modern browser (Google Chrome, Microsoft Edge, or Safari).
* A free **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/).

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/aNsHuL5217/AI-Healthcare-Assistant.git](https://github.com/aNsHuL5217/AI-Healthcare-Assistant.git)
   cd AI-Healthcare-Assistant
