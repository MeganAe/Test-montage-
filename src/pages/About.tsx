import React from 'react';
import { BrainCircuit, Sparkles, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'Advanced AI Technology',
      description: 'Powered by state-of-the-art AI models for high-quality image generation',
    },
    {
      icon: Sparkles,
      title: 'Creative Freedom',
      description: 'Transform your ideas into stunning visuals with simple text prompts',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate images in seconds with our optimized infrastructure',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data and creations are protected with enterprise-grade security',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Metoushela AI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Transforming imagination into reality through artificial intelligence
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg border dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Created by Metoushela Walker</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Metoushela AI is the result of a passion for combining artificial intelligence with creative
          expression. Our mission is to make advanced AI technology accessible to everyone, enabling
          users to bring their creative visions to life.
        </p>
      </div>
    </div>
  );
};

export default About;