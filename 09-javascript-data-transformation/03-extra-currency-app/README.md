# SMART CONVERTER - Mobile Purchasing & Exchange Application

An independent, real-world portfolio project extending the data transformation module. This application acts as a dynamic checkout interface that calculates multi-item totals and handles asynchronous currency exchange parsing.

## Key Engineering Features

### 1. Standalone Sync Architecture

- **Local Asset Binding**: Built using static `.png` routing within an isolated `assets/` directory. This decouples layout rendering from third-party media servers, ensuring offline uptime and zero image loading blocks inside sandboxed browser instances.
- **Error Fallback Engine**: Implements HTML DOM native `onerror` exception mapping. If a local file path becomes unresolvable, a JavaScript lifecycle switch instantly replaces the image frame with a responsive, structured UI fallback box without interrupting system operations.

### 2. Dynamic Live Rate Streams & Formatting

- **Asynchronous Rest API Streaming**: Integrates a background `async/await` fetch protocol connecting with web-based currency pricing entities.
- **The Intl Normalization Matrix**: Employs JavaScript’s native `Intl.NumberFormat` localization constructs to structure raw mathematics natively into formatted local regional strings (`pt-BR` for BRL / `en-US` for USD).

### 3. Responsive Responsive UI

- Developed using modern CSS Flexbox and media breakpoints (`@media`). The system transitions between desktop layouts (split forms and catalogues) and unified vertical grids for handheld screens without creating unexpected layout breaks or horizontal scroll triggers.

---

## File Topology

```text
03-extra-currency-app/
├── assets/
│   ├── iphone.png
│   ├── samsung.png
│   ├── xiaomi.png
│   ├── oneplus.png
│   ├── motorola.png
│   └── custom.png
├── index.html
└── README.md
```

## Running the Application

1. Ensure you have the **Live Server** extension running in your VS-Code editor.
2. Open `index.html` and click **"Go Live"** from the status bar.
3. Select devices to test the synchronous asset swap and automated math pipelines.

# SMART CONVERTER - Mobile Purchasing & Exchange Application

An independent, real-world portfolio project extending the data transformation module. This application acts as a dynamic checkout interface that calculates multi-item totals and handles asynchronous currency exchange parsing.

## Key Engineering Features

### 1. Standalone Sync Architecture

- **Local Asset Binding**: Built using static `.png` routing within an isolated `assets/` directory. This decouples layout rendering from third-party media servers, ensuring offline uptime and zero image loading blocks inside sandboxed browser instances.
- **Error Fallback Engine**: Implements HTML DOM native `onerror` exception mapping. If a local file path becomes unresolvable, a JavaScript lifecycle switch instantly replaces the image frame with a responsive, structured UI fallback box without interrupting system operations.

### 2. Dynamic Live Rate Streams & Formatting

- **Asynchronous Rest API Streaming**: Integrates a background `async/await` fetch protocol connecting with web-based currency pricing entities.
- **The Intl Normalization Matrix**: Employs JavaScript’s native `Intl.NumberFormat` localization constructs to structure raw mathematics natively into formatted local regional strings (`pt-BR` for BRL / `en-US` for USD).

### 3. Responsive Responsive UI

- Developed using modern CSS Flexbox and media breakpoints (`@media`). The system transitions between desktop layouts (split forms and catalogues) and unified vertical grids for handheld screens without creating unexpected layout breaks or horizontal scroll triggers.

---

## File Topology

```text
03-extra-currency-app/
├── assets/
│   ├── iphone.png
│   ├── samsung.png
│   ├── xiaomi.png
│   ├── oneplus.png
│   ├── motorola.png
│   └── custom.png
├── index.html
└── README.md
```

## Running the Application

1. Ensure you have the **Live Server** extension running in your VS-Code editor.
2. Open `index.html` and click **"Go Live"** from the status bar.
3. Select devices to test the synchronous asset swap and automated math pipelines.
