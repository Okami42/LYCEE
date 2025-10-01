import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Bell, Clock } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';

// Rendu dynamique : les articles se mettent à jour automatiquement
export const dynamic = 'force-dynamic';

export default async function ActualitesPage() {
  const articles = await getAllArticles();
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Bell className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Actualités du lycée</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Article à la une */}
        {featuredArticle && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <h2 className="text-2xl font-bold text-slate-900">À la une</h2>
            </div>
            
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${featuredArticle.categoryColor}`}>
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-slate-500 mr-2" />
                    <time className="text-slate-600">{featuredArticle.dateFormatted}</time>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-slate-900 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <Link 
                    href={`/actualites/${featuredArticle.id}`}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* Autres articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-slate-600 mr-4"></div>
              <h2 className="text-2xl font-bold text-slate-900">Toutes les actualités</h2>
            </div>
            <div className="flex items-center text-slate-600">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-sm">Triées par date de publication</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.categoryColor}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                    <time className="text-sm text-slate-600">{article.dateFormatted}</time>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-900 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/actualites/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-all"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

  
      </div>
    </div>
  );
}
