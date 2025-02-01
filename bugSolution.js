```javascript
// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/page.js

export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```