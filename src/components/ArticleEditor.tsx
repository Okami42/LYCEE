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
  
  addAttributes() {
    return {
      backgroundColor: {
        default: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
        parseHTML: element => element.getAttribute('data-bg-color') || 'linear-gradient(to right, #f8fafc, #f1f5f9)',
        renderHTML: attributes => {
          return {
            'data-bg-color': attributes.backgroundColor,
          };
        },
      },
      borderColor: {
        default: '#cbd5e1',
        parseHTML: element => element.getAttribute('data-border-color') || '#cbd5e1',
        renderHTML: attributes => {
          return {
            'data-border-color': attributes.borderColor,
          };
        },
      },
    };
  },
  
  parseHTML() {
    return [
      { 
        tag: 'div[data-bg-color]',
      }
    ];
  },
  
  renderHTML({ node }) {
    const bgColor = node.attrs.backgroundColor || 'linear-gradient(to right, #f8fafc, #f1f5f9)';
    const borderColor = node.attrs.borderColor || '#cbd5e1';
    return [
      'div', 
      { 
        'data-bg-color': bgColor,
        'data-border-color': borderColor,
        style: `background: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0;`,
      }, 
      0
    ];
  },
  
  // @ts-expect-error - Custom box command typing for TipTap extension
  addCommands() {
    return {
      // @ts-expect-error - Custom box command typing for TipTap extension
      setBox: (attributes = {}) => ({ commands, state }) => {
        const { selection } = state;
        const { $from, $to } = selection;
        
        // @ts-expect-error - attributes typing
        const bgColor = attributes.backgroundColor || 'linear-gradient(to right, #f8fafc, #f1f5f9)';
        // @ts-expect-error - attributes typing
        const bdColor = attributes.borderColor || '#cbd5e1';
        
        // Vérifier si on est déjà dans une box
        let inBox = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.doc.nodesBetween($from.pos, $to.pos, (node: any) => {
          if (node.type.name === 'box') {
            inBox = true;
            return false;
          }
        });
        
        if (inBox) {
          // Si on est dans une box, mettre à jour ses attributs
          return commands.updateAttributes('box', {
            backgroundColor: bgColor,
            borderColor: bdColor,
          });
        } else {
          // Sinon créer une nouvelle box
          return commands.wrapIn('box', {
            backgroundColor: bgColor,
            borderColor: bdColor,
          });
        }
      },
      // @ts-expect-error - Custom box command typing for TipTap extension
      unsetBox: () => ({ commands }) => {
        return commands.lift('box');
      },
    };
  },
});

export default function ArticleEditor({ content, onChange }: ArticleEditorProps) {
  // Tous les hooks doivent être appelés en premier
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [showBoxColorPicker, setShowBoxColorPicker] = React.useState(false);
  const colorPickerRef = React.useRef<HTMLDivElement>(null);
  const boxColorPickerRef = React.useRef<HTMLDivElement>(null);
  const [, forceUpdate] = React.useReducer((x: number) => x + 1, 0);

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
      forceUpdate();
    },
    onSelectionUpdate: () => {
      forceUpdate();
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
      if (boxColorPickerRef.current && event.target && !boxColorPickerRef.current.contains(event.target as HTMLElement)) {
        setShowBoxColorPicker(false);
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

  const boxColors = [
    { name: 'Gris', backgroundColor: 'linear-gradient(to right, #f8fafc, #f1f5f9)', borderColor: '#cbd5e1', previewColor: '#e2e8f0' },
    { name: 'Rouge', backgroundColor: 'linear-gradient(to right, #fef2f2, #fee2e2)', borderColor: '#fecaca', previewColor: '#fecaca' },
    { name: 'Orange', backgroundColor: 'linear-gradient(to right, #fff7ed, #ffedd5)', borderColor: '#fed7aa', previewColor: '#fed7aa' },
    { name: 'Jaune', backgroundColor: 'linear-gradient(to right, #fefce8, #fef9c3)', borderColor: '#fde68a', previewColor: '#fde047' },
    { name: 'Vert', backgroundColor: 'linear-gradient(to right, #f0fdf4, #dcfce7)', borderColor: '#bbf7d0', previewColor: '#86efac' },
    { name: 'Bleu', backgroundColor: 'linear-gradient(to right, #eff6ff, #dbeafe)', borderColor: '#bfdbfe', previewColor: '#93c5fd' },
    { name: 'Indigo', backgroundColor: 'linear-gradient(to right, #eef2ff, #e0e7ff)', borderColor: '#c7d2fe', previewColor: '#a5b4fc' },
    { name: 'Violet', backgroundColor: 'linear-gradient(to right, #faf5ff, #f3e8ff)', borderColor: '#e9d5ff', previewColor: '#d8b4fe' },
    { name: 'Rose', backgroundColor: 'linear-gradient(to right, #fdf2f8, #fce7f3)', borderColor: '#fbcfe8', previewColor: '#f9a8d4' },
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

        <div className="relative" ref={boxColorPickerRef}>
          <button
            onClick={() => setShowBoxColorPicker(!showBoxColorPicker)}
            className={`p-2 rounded hover:bg-slate-100 transition-colors ${
              editor.isActive('box') ? 'bg-blue-100 text-blue-600' : 'text-slate-700'
            }`}
            title="Encadrer"
            type="button"
          >
            <Square className="h-4 w-4" />
          </button>
          
          {showBoxColorPicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-300 rounded-lg shadow-lg p-3 z-50 min-w-[200px] max-h-[400px] overflow-y-auto">
              <div className="flex flex-col gap-2">
                {boxColors.map((color) => (
                  <button
                    key={color.backgroundColor}
                    onClick={() => {
                      // @ts-expect-error - Custom box command not in type definitions
                      editor.chain().focus().setBox({ backgroundColor: color.backgroundColor, borderColor: color.borderColor }).run();
                      setShowBoxColorPicker(false);
                    }}
                    className="w-full h-10 rounded-md border-2 border-slate-200 hover:border-slate-400 transition-all cursor-pointer flex items-center px-3 gap-3"
                    type="button"
                  >
                    <div 
                      className="w-8 h-8 rounded border" 
                      style={{ 
                        backgroundColor: color.previewColor,
                        borderColor: color.borderColor
                      }}
                    ></div>
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
            editor.chain().focus().toggleBold().run();
            forceUpdate();
          }}
          isActive={editor.isActive('bold')}
          title="Gras"
        >
          <Bold className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          onClick={() => {
            editor.chain().focus().toggleItalic().run();
            forceUpdate();
          }}
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

