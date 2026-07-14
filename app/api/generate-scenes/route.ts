import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { story, userPrompt,} = await req.json();
    

   const prompt = `
You are an award-winning Hollywood film director and travel cinematographer.

Your job is to convert the travel story into a professional cinematic shot list.

Travel Story:

${story}

${userPrompt ? `

USER'S CREATIVE DIRECTION:

${userPrompt}

IMPORTANT:
The entire shot list MUST follow the user's creative direction.

If the user asks for:
- Luxury → Use premium hotels, elegant interiors, luxury lifestyle shots.
- Netflix Documentary → Use cinematic drone shots, slow motion, emotional storytelling.
- Viral Reel → Use fast cuts, dynamic camera movement and trendy transitions.
- Romantic → Use warm colors, sunsets and emotional close-ups.

` : ""}

Return 10–15 scenes.

For every scene include:

Scene Number
Duration
Camera Shot
Visual Description
Transition
Emotion

Make every scene cinematic and visually beautiful.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const scenes = completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      scenes,
    });
  } catch (error: any) {
    console.error("Generate Scenes Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}