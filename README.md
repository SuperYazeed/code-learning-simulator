# Code Learning Simulator

A mobile-first educational coding simulator that helps beginners learn programming by translating between code and natural language.

## 🎯 Features

### Core Functionality

1. **Code → Data (Explanation Mode)**
   - Analyze code and provide structured explanations
   - 4-part format: Summary, Variables, Steps, Output
   - Support for Python, Java, TypeScript, and C++
   - Error highlighting and handling

2. **Data → Code (Generation Mode)**
   - Convert natural language descriptions to code
   - Generate runnable code snippets
   - Support for all 4 programming languages
   - Automatic type detection and variable naming

3. **Examples Library**
   - 32 built-in examples covering all languages
   - Easy-to-use modal interface
   - Organized by language and mode

4. **User Interface**
   - Mobile-first responsive design
   - Dark/Light mode toggle
   - Language selector
   - Mode toggle (Code → Data | Data → Code)
   - Action buttons (Run, Clear, Examples, Settings)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Usage

### Code → Data Mode

1. Select your programming language
2. Choose "Code → Data" mode
3. Paste your code in the input area
4. Click "Run" to analyze
5. View the structured explanation in 4 parts:
   - **Summary**: One-sentence description
   - **Variables**: Table with name, type, and value
   - **Steps**: Line-by-line actions
   - **Output**: Expected print result

### Data → Code Mode

1. Select your target programming language
2. Choose "Data → Code" mode
3. Write a natural language description
4. Click "Run" to generate code
5. View the generated code and expected output

### Examples

1. Click the "Examples" button
2. Select your language and mode
3. Browse the available examples
4. Click "Use Example" to load it

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Syntax Highlighting**: react-syntax-highlighter
- **Theme**: next-themes for dark/light mode
- **AI**: Z-AI Web Dev SDK for code analysis and generation

## 📚 API Endpoints

### POST /api/analyze-code
Analyzes code and provides structured explanation.

**Request:**
```json
{
  "code": "x = 10\nprint(x)",
  "language": "python"
}
```

**Response:**
```json
{
  "summary": "Defines x=10 and prints it",
  "variables": [
    {
      "name": "x",
      "type": "int",
      "value": "10"
    }
  ],
  "steps": ["Line 1 define x", "Line 2 print x"],
  "output": "10"
}
```

### POST /api/generate-code
Converts natural language to code.

**Request:**
```json
{
  "description": "My name is Sarah",
  "language": "python"
}
```

**Response:**
```json
{
  "code": "name = \"Sarah\"\nprint(name)",
  "output": "Sarah"
}
```

## 🎨 Design

- **Mobile-first**: Optimized for mobile screens
- **Responsive**: Works on all device sizes
- **Dark/Light Mode**: User preference support
- **Accessible**: WCAG compliant where possible
- **Intuitive**: Clean, beginner-friendly interface

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── analyze-code/    # Code analysis endpoint
│   │   └── generate-code/   # Code generation endpoint
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Main application page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── code-explanation.tsx
│   ├── generated-code.tsx
│   ├── examples-modal.tsx
│   ├── settings-modal.tsx
│   └── theme-provider.tsx
└── globals.css
```

## 📝 Examples

The application includes 32 built-in examples:

### Code → Data (16 examples)
- **Python**: Variables (int, string, float, boolean)
- **Java**: Variables (int, double, String, boolean)
- **TypeScript**: Variables (number, string, boolean)
- **C++**: Variables (int, double, string, bool)

### Data → Code (16 examples)
- **Python**: Name, age, GPA, active status
- **Java**: City, temperature, score, access
- **TypeScript**: Count, price, title, status
- **C++**: Height, weight, name, admin status

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Z.AI SDK](https://z.ai/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)