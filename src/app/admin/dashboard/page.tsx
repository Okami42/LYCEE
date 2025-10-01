'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  LogOut, 
  FileText, 
  Calendar,
  Star,
  AlertCircle
} from 'lucide-react';
import type { Article } from '@/lib/articles';

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    loadArticles();
  }, []);

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

  const loadArticles = async () => {
    try {
      const response = await fetch('/api/admin/articles');
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Load articles error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setArticles(articles.filter(a => a.id !== id));
      } else {
        alert('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Erreur lors de la suppression');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard Admin</h1>
              <p className="text-slate-600 text-sm">Gestion des actualités</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 font-medium"
              >
                Voir le site
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Actions */}
        <div className="mb-8">
          <Link
            href="/admin/dashboard/editor"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02]"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Nouvel article
          </Link>
        </div>

        {/* Articles list */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-slate-600">Chargement des articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
            <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Aucun article
            </h3>
            <p className="text-slate-600 mb-6">
              Commencez par créer votre premier article
            </p>
            <Link
              href="/admin/dashboard/editor"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Créer un article
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">
                      Article
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">
                      Catégorie
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">
                      Date
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">
                      Statut
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {articles.map((article) => (
                    <tr key={article.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-semibold text-slate-900 mb-1 flex items-center">
                            {article.title}
                            {article.featured && (
                              <Star className="h-4 w-4 text-yellow-500 ml-2 fill-current" />
                            )}
                          </div>
                          <div className="text-sm text-slate-900 line-clamp-1">
                            {article.excerpt}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${article.categoryColor}`}>
                          {article.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center text-sm text-slate-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {article.dateFormatted}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Publié
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Link
                            href={`/admin/dashboard/editor?id=${article.id}`}
                            className="inline-flex items-center justify-center w-9 h-9 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Modifier"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <Link
                            href={`/actualites/${article.id}`}
                            target="_blank"
                            className="inline-flex items-center justify-center w-9 h-9 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Voir"
                          >
                            <FileText className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="inline-flex items-center justify-center w-9 h-9 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

