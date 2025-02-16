import React, { useState } from 'react';
import * as fal from '@fal-ai/serverless-client';
import { Download, Image as ImageIcon, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const FAL_API_KEY = "5bc94134-46b7-40f6-b4b0-3be3e131117a:585abd893ed441ae5a30ca208f84816c";

fal.config({
  credentials: FAL_API_KEY,
});

const Generator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setLoading(true);
    try {
      const result = await fal.run('fal-ai/fast-sdxl', {
        input: {
          prompt,
          negative_prompt: 'ugly, blurry, low quality',
          num_inference_steps: 50,
        },
      });

      if (result.images?.[0]) {
        setGeneratedImage(result.images[0]);
        toast.success('Image generated successfully!');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'metoushela-ai-generation.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Image downloaded successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">AI Image Generator</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Create stunning images with Metoushela AI
        </p>
      </div>

      <div className="mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700"
          />
          <button
            onClick={generateImage}
            disabled={loading}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <ImageIcon className="w-5 h-5" />
                Generate
              </>
            )}
          </button>
        </div>
      </div>

      {generatedImage && (
        <div className="relative group">
          <img
            src={generatedImage}
            alt="Generated artwork"
            className="w-full rounded-lg shadow-lg"
          />
          <button
            onClick={downloadImage}
            className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Download className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Generator;