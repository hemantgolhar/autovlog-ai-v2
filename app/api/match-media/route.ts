import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { story, scenes, files } = await req.json();

    const prompt = `
You are an expert travel video editor.

You have:

Travel Story:
${story}

Scene Timeline:
${scenes}

Uploaded Media:
${JSON.stringify(files, null, 2)}

For every scene choose the BEST uploaded file.

Return ONLY valid JSON.

Example:

[
  {
    "scene": 1,
    "description": "Beach sunrise",
    "media": "https://..."
  }
]
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const mediaMap = completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      mediaMap,
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