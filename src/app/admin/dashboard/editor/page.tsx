'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowLeft,
  Save,
  Upload,
  X,
  FileText,
  Image as ImageIcon,
  Star,
} from 'lucide-react';
import type { Article } from '@/lib/articles';

// Import dynamique pour éviter les problèmes SSR avec Tiptap
const ArticleEditor = dynamic(() => import('@/components/ArticleEditor'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-slate-200 h-96 rounded-lg"></div>,
});

function EditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const articleId = searchParams.get('id');

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [formData, setFormData] = useState<Partial<Article>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Vie du lycée',
    categoryColor: 'bg-blue-100 text-blue-800',
    image: '',
    featured: false,
    files: [],
    author: {
      name: '',
      title: '',
    },
  });

  const categoryOptions = [
    { label: 'Vie du lycée', value: 'Vie du lycée', color: 'bg-blue-100 text-blue-800' },
    { label: 'Rentrée scolaire', value: 'Rentrée scolaire', color: 'bg-green-100 text-green-800' },
    { label: 'Mathématiques', value: 'Mathématiques', color: 'bg-purple-100 text-purple-800' },
    { label: 'Inscription', value: 'Inscription 2025/2026', color: 'bg-orange-100 text-orange-800' },
    { label: 'Événement', value: 'Événement', color: 'bg-pink-100 text-pink-800' },
    { label: 'Information', value: 'Information', color: 'bg-indigo-100 text-indigo-800' },
  ];

  useEffect(() => {
    checkAuth();
    if (articleId) {
      loadArticle(articleId);
    }
  }, [articleId]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/status');
      const data = await response.json();
      
      if (!data.isLoggedIn) {
        router.push('/admin/login');
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      router.push('/admin/login');
    }
  };

  const loadArticle = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/articles/${id}`);
      const data = await response.json();
      if (data.article) {
        setFormData(data.article);
      }
    } catch (error) {
      console.error('Load article error:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'image');

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, image: data.url }));
      } else {
        alert('Erreur lors de l\'upload');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Erreur lors de l\'upload');
    } finally {
      setUploading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('type', 'document');

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({
          ...prev,
          files: [...(prev.files || []), { name: data.fileName, url: data.url }],
        }));
      } else {
        alert('Erreur lors de l\'upload');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Erreur lors de l\'upload');
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files?.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          id: articleId || undefined,
        }),
      });

      const data = await response.json();
      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        alert('Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Erreur lors de la sauvegarde');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/admin/dashboard"
                className="inline-flex items-center text-slate-600 hover:text-slate-900 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour
              </Link>
              <h1 className="text-2xl font-bold text-slate-900">
                {articleId ? 'Modifier l\'article' : 'Nouvel article'}
              </h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all disabled:opacity-50"
            >
              <Save className="h-5 w-5 mr-2" />
              {loading ? 'Sauvegarde...' : 'Sauvegarder'}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">
          {/* Titre */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Titre de l'article *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg font-semibold text-slate-900"
              placeholder="Ex: Commande groupée – Calculatrice Numworks"
              required
            />
          </div>

          {/* Extrait */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Extrait (résumé court) *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
              placeholder="Un court résumé qui apparaîtra sur la page des actualités..."
              required
            />
          </div>

          {/* Catégorie */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Catégorie
            </label>
            <select
              value={formData.category}
              onChange={(e) => {
                const selected = categoryOptions.find(opt => opt.value === e.target.value);
                setFormData({
                  ...formData,
                  category: e.target.value,
                  categoryColor: selected?.color || 'bg-blue-100 text-blue-800',
                });
              }}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Image pour la page actualités */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Image d'aperçu (affichée dans la liste des actualités)
            </label>
            <div className="space-y-4">
              {formData.image && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-200">
                  <img
                    src={formData.image}
                    alt="Aperçu"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex gap-4">
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
                  placeholder="URL de l'image ou uploadez un fichier"
                />
                <label className="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg cursor-pointer transition-colors">
                  <Upload className="h-4 w-4 mr-2" />
                  {uploading ? 'Upload...' : 'Upload'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-4">
              Contenu de l'article *
            </label>
            <ArticleEditor
              content={formData.content || ''}
              onChange={(content) => setFormData({ ...formData, content })}
            />
          </div>

          {/* Fichiers joints */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Fichiers à télécharger (optionnel)
            </label>
            <div className="space-y-4">
              {formData.files && formData.files.length > 0 && (
                <div className="space-y-2">
                  {formData.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-slate-400 mr-3" />
                        <span className="text-slate-700">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <label className="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg cursor-pointer transition-colors">
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? 'Upload...' : 'Ajouter un fichier'}
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
          </div>

          {/* Signature de l'auteur */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="block text-sm font-semibold text-slate-700 mb-4">
              Signature de l'auteur (optionnel)
            </label>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.author?.name || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    author: { ...formData.author!, name: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
                  placeholder="Ex: S. Pluot"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Fonction / Titre
                </label>
                <input
                  type="text"
                  value={formData.author?.title || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    author: { ...formData.author!, title: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900"
                  placeholder="Ex: Professeur de Mathématiques"
                />
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <Star className="h-5 w-5 text-yellow-500 ml-3 mr-2" />
              <span className="text-slate-700 font-medium">
                Mettre en avant (article à la une)
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/admin/dashboard"
              className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Sauvegarde...' : 'Publier l\'article'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>}>
      <EditorContent />
    </Suspense>
  );
}

