declare global {
  interface Window {
    analyticsTrack?: (eventName: string, params?: Record<string, unknown>) => void;
  }
}
export {};
