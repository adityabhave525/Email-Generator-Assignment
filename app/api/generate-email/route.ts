import { NextResponse } from 'next/server';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

interface RequestBody {
  recipientName: string;
  emailPurpose: string;
  keyPoints: string;
}

export async function POST(request: Request) {
  const { recipientName, emailPurpose, keyPoints }: RequestBody = await request.json();

  const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
    modelName: 'gemini-pro',
    temperature: 0.7, 
  });

  const prompt = `Write a professional email to ${recipientName} for the purpose of ${emailPurpose}. Include the following key points: ${keyPoints}.`;

  try {
    const response = await model.invoke(prompt);
    const email = response.content;
    return NextResponse.json({ email });
  } catch (error) {
    console.error('Error generating email:', error);
    return NextResponse.json({ error: 'Failed to generate email' }, { status: 500 });
  }
}