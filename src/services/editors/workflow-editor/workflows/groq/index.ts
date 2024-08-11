import {
  ClapWorkflow,
  ClapWorkflowEngine,
  ClapWorkflowCategory,
  ClapWorkflowProvider,
} from '@aitube/clap'

import {
  genericHeight1024,
  genericHeight2048,
  genericImage,
  genericPrompt,
  genericVideo,
  genericWidth1024,
  genericWidth2048,
} from '../common/defaultValues'

export const groqWorkflows: ClapWorkflow[] = [
  {
    id: 'groq://Mixtral-8x7b-32768',
    label: 'Mixtral 8x7b (32768)',
    description: '',
    tags: ['Mixtral'],
    author: 'Mistral AI',
    thumbnailUrl: '',
    engine: ClapWorkflowEngine.REST_API,
    category: ClapWorkflowCategory.ASSISTANT,
    provider: ClapWorkflowProvider.GROQ,
    data: 'Mixtral-8x7b-32768',
    inputFields: [genericPrompt],
    inputValues: {
      prompt: genericPrompt.defaultValue,
    },
  },
  {
    id: 'groq://Gemma-7b-lt',
    label: 'Gemma 7b lt',
    description: '',
    tags: ['Gemma'],
    author: 'Google',
    thumbnailUrl: '',
    engine: ClapWorkflowEngine.REST_API,
    category: ClapWorkflowCategory.ASSISTANT,
    provider: ClapWorkflowProvider.GROQ,
    data: 'Gemma-7b-lt',
    inputFields: [genericPrompt],
    inputValues: {
      prompt: genericPrompt.defaultValue,
    },
  },
  {
    id: 'groq://Llama3-70b-8192',
    label: 'Llama3 70b (8192)',
    description: '',
    tags: ['Llama3'],
    author: 'Meta',
    thumbnailUrl: '',
    engine: ClapWorkflowEngine.REST_API,
    category: ClapWorkflowCategory.ASSISTANT,
    provider: ClapWorkflowProvider.GROQ,
    data: 'Llama3-70b-8192',
    inputFields: [genericPrompt],
    inputValues: {
      prompt: genericPrompt.defaultValue,
    },
  },
  {
    id: 'groq://Llama3-8b-8192',
    label: 'Llama3 8b (8192)',
    description: '',
    tags: ['Llama3'],
    author: 'Google',
    thumbnailUrl: '',
    engine: ClapWorkflowEngine.REST_API,
    category: ClapWorkflowCategory.ASSISTANT,
    provider: ClapWorkflowProvider.GROQ,
    data: 'Llama3-8b-8192',
    inputFields: [genericPrompt],
    inputValues: {
      prompt: genericPrompt.defaultValue,
    },
  },
]