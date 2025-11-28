
import { GoogleGenAI } from "@google/genai";
import { Slide } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is not set in process.env");
      throw new Error("Gemini API Key is missing. Please set it in the environment.");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const generateSpeakerNotes = async (slide: Slide): Promise<string> => {
  try {
    const ai = getGenAI();
    const modelId = "gemini-2.5-flash";

    const prompt = `
      You are an expert technical mentor and public speaking coach.
      I need speaker notes for a presentation slide about "New Engineer Growth in the AI Era".
      
      Slide Title: ${slide.content.title}
      Slide Type: ${slide.type}
      Slide Content: ${JSON.stringify(slide.content)}

      Please provide:
      1. A brief "Hook" to start this slide (1 sentence).
      2. Key talking points elaborating on the content (bullet points).
      3. A "Pro Tip" for the engineer listening.

      Keep the tone professional, encouraging, and insightful.
      Format correctly in Markdown.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "No notes generated.";
  } catch (error) {
    console.error("Error generating speaker notes:", error);
    return "Error: Unable to generate notes at this time.";
  }
};

export const generateSlideImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = getGenAI();
    // Use gemini-2.5-flash-image for image generation as per guidelines for general tasks
    const modelId = "gemini-2.5-flash-image"; 
    
    // As per guidelines, iterate through parts to find the image
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          { text: prompt + " The style should be high-tech, cinematic, professional digital art, suitable for a tech presentation background. 16:9 aspect ratio." }
        ]
      },
      // Note: responseMimeType is not supported for nano banana models
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }
    
    console.warn("No image data found in response");
    return null;

  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
