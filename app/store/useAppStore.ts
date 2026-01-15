import { create } from 'zustand';

interface AppState {
  isListening: boolean;
  isProcessing: boolean;
  isPlayingAudio: boolean;
  status: 'idle' | 'listening' | 'transcribing' | 'thinking' | 'generating_audio' | 'speaking';
  setIsListening: (isListening: boolean) => void;
  setIsProcessing: (isProcessing: boolean) => void;
  setIsPlayingAudio: (isPlaying: boolean) => void;
  setStatus: (status: AppState['status']) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isListening: false,
  isProcessing: false,
  isPlayingAudio: false,
  status: 'idle',
  setIsListening: (isListening) => set({ isListening }),
  setIsProcessing: (isProcessing) => set({ isProcessing }),
  setIsPlayingAudio: (isPlayingAudio) => set({ isPlayingAudio }),
  setStatus: (status) => set({ status }),
}));
