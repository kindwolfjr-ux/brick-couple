export {};

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }

  const ym: (...args: any[]) => void;
}
