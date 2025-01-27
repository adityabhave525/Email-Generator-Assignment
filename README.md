# Professional Email Generator

This is a Next.js application that generates professional email templates based on user inputs. It uses Google's Gemini model via LangChain to generate the emails. The application includes a form where users can input the recipient's name, email purpose, and key points, and it displays the generated email on the same page.

## Live Link
[Website](https://email-generator-assignment.vercel.app/)

---

## [Demo Video Link](https://youtu.be/1XGaoMQNJ8U)

https://youtu.be/1XGaoMQNJ8U

## Features
- **User-Friendly Form**: Collects the recipient's name, email purpose (dropdown with options like "Meeting Request", "Follow Up", "Thank You"), and key points.
- **AI-Powered Email Generation**: Uses Google's Gemini model via LangChain to generate professional emails.
- **Real-Time Display**: Displays the generated email on the same page after submission.
- **Loading State**: Shows a spinner while the email is being generated to improve user experience.

---

## Technologies Used
- **Next.js**: A React framework for building server-rendered applications.
- **LangChain**: A framework for building applications powered by language models.
- **Google's Gemini**: A state-of-the-art generative AI model for text generation.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)
- **Google API Key**: You need a Google API key to use the Gemini model. You can get one from the [Google AI Studio.](https://aistudio.google.com/app/apikey)

---

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/professional-email-generator.git
cd professional-email-generator
```

### 2.Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory of your project and add your Google API key:
```
GOOGLE_API_KEY=your_google_api_key_here
```

### 4. Run the Application
Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Project Structure
- `app/page.tsx`: The main page of the application. It contains the form and logic for generating the email.
- `app/api/generate-email/route.ts`: The API route that handles the form submission and generates the email using LangChain and Google's Gemini model.
- `package.json`: Lists the project dependencies and scripts.