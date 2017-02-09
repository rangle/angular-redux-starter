const context = (require as any).context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
