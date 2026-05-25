<div align="center">

# 🦸‍♂️ BalMitra AI

**An AI-powered, low-latency child safety ecosystem and emergency response platform.**

[![AVINYA 4.0 Hackathon](https://img.shields.io/badge/AVINYA_4.0-Runner__Up_🥈-FFD700?style=for-the-badge&logo=hackaday&logoColor=black)](#)
[![Status: Active](https://img.shields.io/badge/Status-Active_Development-2EA043?style=for-the-badge&logo=github)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](#)

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0b1120&height=150&section=header&text=BalMitra%20AI&fontSize=50&fontColor=ffffff&animation=fadeIn" alt="BalMitra AI Banner" width="100%"/>
</p>

*Built during a ruthless 24-hour sprint. 120 Teams. One Stage. 🥈 2nd Place.*

</div>

---

## 📖 The Vision
**BalMitra AI** bridges the gap between passive panic buttons and proactive, intelligent threat mitigation for children. We leverage edge-AI intelligence and a scalable cloud architecture to ensure personal safety through stealth execution, real-time threat detection, and emotional wellness analytics.

---

## 🚀 The Ecosystem

BalMitra AI operates through two synchronized micro-frontends:

### 📱 1. Child Device Intelligence (Edge & Client)
*Optimized for low-power consumption and extreme panic scenarios, operating entirely in stealth mode.*

| Feature | Description |
| :--- | :--- |
| 🎙️ **Hands-Free SOS** | Trigger mechanisms that require absolute zero screen interaction. |
| 🧠 **Dual-Engine AI** | On-device models trained to recognize audio and motion anomalies instantly. |
| ☁️ **Audio Telemetry** | Captures & uploads 5-second audio evidence payloads to the cloud with ultra-low latency. |
| 🥷 **Stealth Execution**| Alerts are processed silently in the background, masking activity from potential threats. |
| 🔋 **Low-Power Mode** | Background daemon designed to minimize battery drain while maintaining active inference. |

### 💻 2. Parental Command Dashboard (Cloud & Web)
*A centralized control hub for real-time monitoring and historical behavioral analysis.*

| Feature | Description |
| :--- | :--- |
| 🗺️ **Live Navigation** | Real-time geospatial tracking and fastest-route mapping during an active SOS. |
| 🗣️ **Wellness Analytics**| Processes voice telemetry to baseline and analyze a child's emotional state. |
| 🛑 **Bullying Detection** | Identifies anomalies in daily routines and emotional baselines to flag non-physical threats. |
| 🚧 **Geo-Fenced Zones** | Dynamic push notifications when virtual safety boundaries are breached. |
| 📡 **Hardware Tracking** | Real-time monitoring of device battery life, network strength, and sensor status. |

---
## 🛠️ Tech Stack
> **Note:** The backend architecture was designed for high concurrency and low latency to process incoming SOS requests and audio telemetry without dropping packets during simulated emergency loads.

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend / Mobile** | React Native, Figma (UI/UX) |
| **Backend / API** | Node.js, Express.js, Python |
| **AI / ML Models** | TensorFlow Lite, PyTorch |
| **Database / Cache** | MongoDB, Redis |
| **Cloud / DevOps** | AWS EC2, Docker |

---

## 🏆 The Team (Akatsuki)

We are a team of passionate builders who believe that execution beats ideation. 
* **Harsh Shinde** – Team Lead & Backend Developer • [LinkedIn](https://www.linkedin.com/in/harsh-shinde-60046436b/)
* **Rohit Dhangar** – UI/UX Designer
* **Sham Patil** – App Developer

*BalMitra AI was built under 24 hours at the AVINYA 4.0 Hackathon (Innovision 2026).*

## ⚙️ System Architecture

*(GitHub will render this diagram automatically)*

```mermaid
graph TD
    subgraph Edge Intelligence [Child Device]
        A[Sensors & Audio] --> B(Dual-Engine AI Model)
        B -->|Anomaly Detected| C[Stealth SOS Trigger]
        C --> D{5s Audio Payload}
    end

    subgraph Backend Core [Node.js / Express]
        D -->|WebSocket/REST| E((API Gateway))
        E --> F[Event Broker]
        F --> G[(MongoDB Vault)]
        F --> H[Python AI Analytics Service]
    end

    subgraph Parental Control [Dashboard]
        F -->|Real-Time Alert| I[Live Map Interface]
        H -->|Behavioral Insights| J[Wellness Dashboard]
    end


    
