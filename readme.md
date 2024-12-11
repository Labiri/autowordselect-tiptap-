# Tiptap AutoWordSelect Extension

A Tiptap extension that automatically expands text selections to complete words, making text selection more intuitive by selecting whole words even when only part of a word is selected.

## Features

- Automatically expands partial word selections to complete words
- Ignores punctuation marks and special characters
- Supports accented characters (Unicode ranges)
- Lightweight and easy to integrate

## Installation

First, ensure you have the required dependencies in your project:

```bash
npm install @tiptap/core @tiptap/pm/state
```

Then copy both the `index.ts` and `README.md` files to your project's extensions directory.

## Usage

Import and add the extension to your Tiptap editor configuration:

```typescript
import { useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { AutoWordSelect } from './extensions/AutoWordSelect'

const editor = useEditor({
  extensions: [
    StarterKit,
    AutoWordSelect
  ],
  content: '<p>Your content here</p>'
})
```

## Behavior

When a user selects part of a word:
- The selection automatically expands to include the complete word
- Only includes alphanumeric characters and accented letters
- Stops at spaces, punctuation marks, and special characters

Example:
- Selecting "sustain" in "sustainability" automatically selects "sustainability"
- Selecting "able" in "sustainable." only selects "sustainable" (excludes the period)
- Selecting "develop" in "development," selects "development" (excludes the comma)

## Technical Details

The extension uses ProseMirror's Plugin system to:
1. Listen for mouseup events after text selection
2. Check characters before and after the selection
3. Expand selection boundaries to include complete words
4. Handle the selection update through ProseMirror's transaction system

The word boundary detection uses a regular expression that matches:
- Alphanumeric characters (a-z, A-Z, 0-9)
- Accented characters (Unicode range \u00C0-\u024F)

## Requirements

- Tiptap v2.x
- ProseMirror state package
- TypeScript (for TypeScript projects)

## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
