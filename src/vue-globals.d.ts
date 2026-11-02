// Global helper yang didaftarkan di main.ts
declare module 'vue' {
  interface ComponentCustomProperties {
    $localePath: (path: string) => string
  }
}

export {}
