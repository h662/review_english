import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { text } = await req.json();

    const response = await axios.post(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyAyoT-OC4-qipzt4TnEiAkuEqrL834Drpk`,
      {
        input: { text },
        voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
        audioConfig: { audioEncoding: "MP3" },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      ok: true,
      audioContent: response.data.audioContent,
    });
  } catch (error) {
    console.error(error);
  }
};
