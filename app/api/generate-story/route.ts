import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const {
      tripName,
      destination,
      travelStyle,
      mood,
      voice,
      music,
       userPrompt,
    } = await req.json();

   const prompt = `
You are an award-winning travel film director and storyteller.

Create a cinematic travel vlog narration.

Trip Name: ${tripName}
Destination: ${destination}
Travel Style: ${travelStyle}
Mood: ${mood}
Narrator Voice: ${voice}
Music Style: ${music}

${userPrompt ? `

User Instructions:
${userPrompt}

IMPORTANT:
Follow the user's instructions while creating the story.
` : ""}

Write:

- A captivating opening
- A beautiful travel story
- Emotional narration
- A memorable ending

Make the narration feel natural, cinematic and engaging.

Length: around 300 words.
`;
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const story = completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      story,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}