'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ResizableImageExtension from 'tiptap-extension-resize-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Node } from '@tiptap/core';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  ImageIcon,
  Undo,
  Redo,
  Quote,
  Code,
  Palette,
  Square,
} from 'lucide-react';

interface ArticleEditorProps {
  content: string;
  onChange: (content: string) => void;
}

// Extension personnalisée pour l'encadré
const Box = Node.create({
  name: 'box',
  group: 'block',
  content: 'block+',
  
  parseHTML() {
    return [{ tag: 'div.custom-box' }];
  },
  
  renderHTML() {
    return ['div', { class: 'custom-box', style: 'background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0;' }, 0];
  },
  
  // @ts-expect-error - Custom box command typing for TipTap extension
  addCommands() {
    return {
      // @ts-expect-error - Custom box command typing for TipTap extension
      setBox: () => ({ commands }) => {
        return commands.wrapIn(this.name);
      },
      // @ts-expect-error - Custom box command typing for TipTap extension
      unsetBox: () => ({ commands }) => {
        return commands.lift(this.name);
      },
    };
  },
});

export default function ArticleEditor({ content, onChange }: ArticleEditorProps) {
  // Tous les hooks doivent être appelés en premier
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const colorPickerRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      ResizableImageExtension,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Box,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] px-4 py-3 prose-slate prose-p:text-slate-900 prose-li:text-slate-900 prose-headings:text-slate-900',
      },
    },
  });

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && event.target && !colorPickerRef.current.contains(event.target as HTMLElement)) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mettre à jour l'éditeur quand le contenu change (pour la modification d'articles existants)
  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('URL de l\'image :');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('URL du lien :');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const MenuButton = ({ 
    onClick, 
    isActive = false, 
    children, 
    title 
  }: { 
    onClick: () => void; 
    isActive?: boolean; 
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded hover:bg-slate-100 transition-colors ${
        isActive ? 'bg-blue-100 text-blue-600' : 'text-slate-700'
      }`}
      title={title}
      type="button"
    >
      {children}
    </button>
  );

  const colors = [
    { name: 'Noir', value: '#0f172a' },
    { name: 'Rouge', value: '#dc2626' },
    { name: 'Orange', value: '#ea580c' },
    { name: 'Jaune', value: '#ca8a04' },
    { name: 'Vert', value: '#16a34a' },
    { name: 'Bleu', value: '#2563eb' },
    { name: 'Indigo', value: '#4f46e5' },
    { name: 'Violet', value: '#9333ea' },
    { name: 'Rose', value: '#db2777' },
  ];

  return (
    <div className="border border-slate-300 rounded-lg overflow-hidden bg-white">
      {/* Menu bar */}
      <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-wrap gap-1">
        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Annuler"
        >
          <Undo className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Refaire"
        >
          <Redo className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <div className="relative" ref={colorPickerRef}>
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 rounded hover:bg-slate-100 transition-colors text-slate-700"
            title="Couleur du texte"
            type="button"
          >
            <Palette className="h-4 w-4" />
          </button>
          
          {showColorPicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-300 rounded-lg shadow-lg p-3 z-50 min-w-[200px] max-h-[400px] overflow-y-auto">
              <div className="flex flex-col gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => {
                      editor.chain().focus().setColor(color.value).run();
                      setShowColorPicker(false);
                    }}
                    className="w-full h-10 rounded-md border-2 border-slate-200 hover:border-slate-400 transition-all cursor-pointer flex items-center px-3 gap-3"
                    type="button"
                  >
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: color.value }}></div>
                    <span className="text-sm font-medium text-slate-700">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton
          onClick={() => {
            if (editor.isActive('box')) {
              // @ts-expect-error - Custom box command not in type definitions
              editor.chain().focus().unsetBox().run();
            } else {
              // @ts-expect-error - Custom box command not in type definitions
              editor.chain().focus().setBox().run();
            }
          }}
          isActive={editor.isActive('box')}
          title="Encadrer"
        >
          <Square className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title="Gras"
        >
          <Bold className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title="Italique"
        >
          <Italic className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          title="Titre 1"
        >
          <Heading1 className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          title="Titre 2"
        >
          <Heading2 className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
          title="Titre 3"
        >
          <Heading3 className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          title="Aligner à gauche"
        >
          <AlignLeft className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          title="Centrer"
        >
          <AlignCenter className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          title="Aligner à droite"
        >
          <AlignRight className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title="Liste à puces"
        >
          <List className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title="Liste numérotée"
        >
          <ListOrdered className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          title="Citation"
        >
          <Quote className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive('codeBlock')}
          title="Code"
        >
          <Code className="h-4 w-4" />
        </MenuButton>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <MenuButton onClick={addLink} title="Ajouter un lien">
          <LinkIcon className="h-4 w-4" />
        </MenuButton>
        <MenuButton onClick={addImage} title="Ajouter une image">
          <ImageIcon className="h-4 w-4" />
        </MenuButton>
      </div>

      {/* Editor content */}
      <div className="min-h-[400px] max-h-[600px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

