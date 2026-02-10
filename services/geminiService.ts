
import { GoogleGenAI, Type, Modality } from "@google/genai";

export interface MomoResponse {
  text: string;
  sources?: { title: string; uri: string }[];
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMomoAIResponse = async (prompt: string): Promise<MomoResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `Anda adalah Momo AI, asisten cerdas SMAN 2 Tompaso.
        Selalu hubungkan jawaban dengan kemajuan teknologi dan kearifan Minahasa.`,
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = groundingChunks?.map((chunk: any) => chunk.web).filter((web: any) => web && web.uri);

    return {
      text: response.text || "Terjadi gangguan sinkronisasi.",
      sources: sources && sources.length > 0 ? sources : undefined
    };
  } catch (error) {
    return { text: "Error: " + error.message };
  }
};

export const analyzeScholarDocument = async (prompt: string, base64Data: string, mimeType: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { inlineData: { data: base64Data, mimeType } },
        { text: `Sebagai AI Scholar SMAN 2 Tompaso, jelaskan dokumen/gambar ini untuk membantu siswa belajar: ${prompt}` }
      ]
    });
    return response.text || "Tidak dapat menganalisis gambar.";
  } catch (error) {
    return "Gagal menganalisis dokumen: " + error.message;
  }
};

export const generateFuturisticVision = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: `Cinematic high-tech school in Tompaso, North Sulawesi. ${prompt}`,
    config: { imageConfig: { aspectRatio: "16:9" } }
  });
  const part = response.candidates[0].content.parts.find(p => p.inlineData);
  return part ? `data:image/png;base64,${part.inlineData.data}` : null;
};

export const generateVeoVideo = async (prompt: string) => {
  // Catatan: Pemanggilan Veo membutuhkan Key Selection di window.aistudio
  if (!(await (window as any).aistudio.hasSelectedApiKey())) {
    await (window as any).aistudio.openSelectKey();
  }
  
  const freshAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
  let operation = await freshAi.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: `Futuristic education at SMAN 2 Tompaso, high tech, cinematic 4k: ${prompt}`,
    config: { resolution: '720p', aspectRatio: '16:9' }
  });

  while (!operation.done) {
    await new Promise(r => setTimeout(r, 10000));
    operation = await freshAi.operations.getVideosOperation({ operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  return `${downloadLink}&key=${process.env.API_KEY}`;
};
