import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, FileText, Download } from 'lucide-react';
import { getArticleById, getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleById(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Navigation breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
            <span className="text-slate-500">›</span>
            <Link href="/actualites" className="text-blue-600 hover:text-blue-800">Actualités</Link>
            <span className="text-slate-500">›</span>
            <span className="text-slate-700">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link 
            href="/actualites" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux actualités
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-slate-500 mr-2" />
              <time className="text-slate-600">Publié le {article.dateFormatted}</time>
              <span className="mx-2 text-slate-300">•</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${article.categoryColor}`}>
                {article.category}
              </span>
            </div>
            
          <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>
        </header>

          {/* Article body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-900 prose-li:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-img:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-slate-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Signature de l'auteur */}
          {article.author && article.author.name && (
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-slate-900 font-semibold">{article.author.name}</p>
              {article.author.title && (
                <p className="text-slate-600 text-sm">{article.author.title}</p>
              )}
            </div>
          )}

          {/* Fichiers joints */}
          {article.files && article.files.length > 0 && (
            <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Fichiers à télécharger
              </h3>
              <div className="space-y-3">
                {article.files.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    download
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-slate-400 group-hover:text-blue-600 mr-3" />
                      <span className="text-slate-700 group-hover:text-blue-700 font-medium">
                        {file.name}
                      </span>
                    </div>
                    <Download className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-600 text-sm">
                  Article publié dans la catégorie <strong>{article.category}</strong>
                </p>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="/actualites" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Toutes les actualités
                </Link>
                <Link 
                  href="/" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Accueil
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}

