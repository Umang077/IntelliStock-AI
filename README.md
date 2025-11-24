# IntelliStock AI  
### Agentic Stock Optimization Platform

---

# Table of Contents
- [Introduction](#introduction)
- [How It Works](#how-how-it-works)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction
**IntelliStock AI** is an intelligent, AI-assisted inventory management platform designed for retail stores handling 5,000+ SKUs.

Most inventory systems only record stock levels — IntelliStock AI goes further by integrating **Agentic AI (LangChain + OpenAI)** to:
- Predict stock-outs  
- Generate automated purchase order suggestions  
- Provide human-friendly explanations  
- Reduce manual stock review time  

The platform has been successfully tested in **2+ live retail store pilots**, significantly improving stock monitoring efficiency.

---

## How It Works
IntelliStock AI analyzes SKU trends, usage patterns, vendor lead times, and movement history using an intelligent multi-step agent.

1. **Collect Data**  
   SKU metadata, historical logs, and stock levels are stored in MongoDB.

2. **AI Reasoning via LangChain**  
   LangChain retrieves SKU data, processes it, and triggers reasoning workflows.

3. **OpenAI Analysis**  
   OpenAI generates insights, forecasts, and reorder suggestions based on structured input.

4. **Dynamic Insights Dashboard**  
   The UI shows actionable insights, alerts, and suggested purchase orders.

---

## Features
- **Agentic AI Assistant**  
  Predicts demand, stock-out dates, and reorder quantities.

- **AI-Generated Operational Insights**  
  Explanation-based summaries powered by OpenAI.

- **Real-Time Inventory Monitoring**  
  Track SKUs and movement across store locations.

- **Secure Authentication**  
  Role-based access for store managers.

- **Pilot Tested in Real Stores**  
  Used in **2+ store locations**, increasing forecasting accuracy by **35%**.

---

## Architecture
Frontend (React.js)
|
|--> REST API Calls
|
Backend (Node.js + Express)
|
|--> LangChain Agent
|--> OpenAI API
|
MongoDB (SKU Data)
AWS EC2 (Deployment) + AWS S3 (Media Storage)

yaml
Copy code

### AI Layer:
- LangChain Tools:  
  - SKU history fetch  
  - Demand forecasting  
  - Reorder calculation  
- OpenAI LLM for reasoning  
- Multi-step orchestration for agent workflows  

---

## 🛠️ Installation

### 1. Clone the Repository:
git clone https://github.com/Umang077/IntelliStock-AI.git
cd IntelliStock-AI
2. Install Backend Dependencies
bash
Copy code
npm install
3. Add Environment Variables
Create a .env file:

4. OPENAI_API_KEY=your_key
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
AWS_BUCKET=your_bucket_name
5. Start the Backend Server
bash
Copy code
npm start
6. Run the Frontend
If frontend is separate:
npm run dev

 
## 🧰 Technologies Used

- **OpenAI API** – Natural language reasoning  
- **LangChain** – Agent orchestration + tool management  
- **React.js** – Frontend UI  
- **Node.js + Express.js** – Backend REST API  
- **MongoDB Atlas** – Cloud database  
- **AWS EC2 & S3** – Hosting & media storage  

---

## 🔮 Future Enhancements

- Multi-agent workflows (procurement agent + vendor communication agent)  
- Automated email-based purchase order dispatch  
- Temporal and seasonal demand forecasting using ML models  
- KPI dashboards for profitability and store performance  
- Multi-store, cross-location analytics  

