import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  Users, Eye, Clock, MapPin, Camera, Star, MessageSquare, 
  TrendingUp, Download, Calendar, Filter, RefreshCw, Heart,
  ThumbsUp, Share2, Tag, AlertCircle, CheckCircle, Brain,
  Target, ShoppingCart, Zap
} from 'lucide-react';

const AnalyticsDashboardPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('users');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Analytics Dashboard - Blue Bird';
  }, []);

  // Mock data - in a real app, this would come from your analytics API
  const userAnalytics = {
    activeUsers: {
      daily: 1247,
      weekly: 8934,
      monthly: 34567,
      growth: { daily: 12.5, weekly: 8.3, monthly: 15.7 }
    },
    engagement: {
      avgSessionDuration: '4m 32s',
      bounceRate: 23.4,
      pagesPerSession: 3.8,
      returnVisitorRate: 67.2
    },
    retention: {
      day1: 85.2,
      day7: 62.8,
      day30: 34.5
    },
    geographic: [
      { country: 'Deutschland', users: 18456, percentage: 53.4 },
      { country: 'Österreich', users: 6789, percentage: 19.6 },
      { country: 'Schweiz', users: 4321, percentage: 12.5 },
      { country: 'Niederlande', users: 2987, percentage: 8.6 },
      { country: 'Andere', users: 1987, percentage: 5.9 }
    ]
  };

  const photoGalleryMetrics = {
    uploads: {
      total: 2847,
      thisWeek: 156,
      growth: 23.8
    },
    interactions: {
      totalLikes: 45678,
      totalShares: 8934,
      totalComments: 12456,
      avgEngagementRate: 8.7
    },
    trending: [
      { id: 1, title: 'Latte Art Masterpiece', likes: 234, shares: 45, category: 'Coffee' },
      { id: 2, title: 'Cozy Corner Setup', likes: 189, shares: 67, category: 'Interior' },
      { id: 3, title: 'Matcha Ceremony', likes: 156, shares: 34, category: 'Matcha' },
      { id: 4, title: 'Morning Vibes', likes: 145, shares: 28, category: 'Atmosphere' }
    ],
    categories: [
      { name: 'Coffee', count: 1245, percentage: 43.7 },
      { name: 'Interior', count: 678, percentage: 23.8 },
      { name: 'Food', count: 456, percentage: 16.0 },
      { name: 'Matcha', count: 289, percentage: 10.2 },
      { name: 'Events', count: 179, percentage: 6.3 }
    ]
  };

  const reviewMetrics = {
    overview: {
      averageRating: 4.7,
      totalReviews: 1847,
      responseRate: 94.2,
      avgResponseTime: '2h 15m'
    },
    sentiment: {
      positive: 78.4,
      neutral: 16.8,
      negative: 4.8
    },
    topRated: [
      { item: 'Blue Bird Special Coffee', rating: 4.9, reviews: 234 },
      { item: 'Vanilla Matcha', rating: 4.8, reviews: 189 },
      { item: 'Avocado Toast', rating: 4.7, reviews: 156 },
      { item: 'Atmosphere & Service', rating: 4.8, reviews: 298 }
    ]
  };

  const aiRecommendations = {
    personalizedSuggestions: {
      accuracy: 87.3,
      clickThroughRate: 12.8,
      conversionRate: 6.4
    },
    crossSelling: {
      opportunities: 456,
      successRate: 23.7,
      revenueImpact: '€2,847'
    },
    userPreferences: [
      { preference: 'Coffee Enthusiast', users: 45.2, engagement: 8.9 },
      { preference: 'Matcha Lover', users: 23.8, engagement: 9.2 },
      { preference: 'Health Conscious', users: 18.7, engagement: 7.8 },
      { preference: 'Social Visitor', users: 12.3, engagement: 6.5 }
    ]
  };

  const chartData = {
    userActivity: [
      { date: '2024-01-01', users: 1200, sessions: 1800, pageViews: 5400 },
      { date: '2024-01-02', users: 1350, sessions: 2100, pageViews: 6300 },
      { date: '2024-01-03', users: 1180, sessions: 1950, pageViews: 5850 },
      { date: '2024-01-04', users: 1420, sessions: 2250, pageViews: 6750 },
      { date: '2024-01-05', users: 1580, sessions: 2400, pageViews: 7200 },
      { date: '2024-01-06', users: 1650, sessions: 2550, pageViews: 7650 },
      { date: '2024-01-07', users: 1247, sessions: 2100, pageViews: 6300 }
    ],
    engagement: [
      { hour: '06:00', engagement: 2.1 },
      { hour: '08:00', engagement: 6.8 },
      { hour: '10:00', engagement: 8.9 },
      { hour: '12:00', engagement: 9.5 },
      { hour: '14:00', engagement: 7.2 },
      { hour: '16:00', engagement: 8.1 },
      { hour: '18:00', engagement: 9.8 },
      { hour: '20:00', engagement: 6.4 },
      { hour: '22:00', engagement: 3.2 }
    ]
  };

  const COLORS = ['#3d3629', '#b09e7e', '#EDC9AF', '#c5ae91', '#f5f2e8'];

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const exportReport = () => {
    // Mock export functionality
    alert('Report exported successfully!');
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{color: '#3d3629'}}>Analytics Dashboard</h1>
              <p className="text-lg" style={{color: '#5a4f42'}}>
                Comprehensive insights into user behavior and community engagement
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={refreshData}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors"
                style={{backgroundColor: '#e8dbc7', borderColor: '#a89180', color: '#3d3629'}}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={exportReport}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{backgroundColor: '#3d3629', color: '#f9f7f4'}}
              >
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          {/* Date Range Selector */}
          <div className="flex gap-2 mb-6">
            {[
              { value: '1d', label: '24h' },
              { value: '7d', label: '7 Tage' },
              { value: '30d', label: '30 Tage' },
              { value: '90d', label: '90 Tage' }
            ].map((range) => (
              <button
                key={range.value}
                onClick={() => setDateRange(range.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  dateRange === range.value 
                    ? 'text-white' 
                    : 'hover:opacity-80'
                }`}
                style={{
                  backgroundColor: dateRange === range.value ? '#b09e7e' : '#e8dbc7',
                  color: dateRange === range.value ? '#f9f7f4' : '#3d3629'
                }}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-8" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Active Users */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
                  <Users className="h-6 w-6" style={{color: '#f9f7f4'}} />
                </div>
                <span className="text-sm font-medium text-green-600">+{userAnalytics.activeUsers.growth.daily}%</span>
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {userAnalytics.activeUsers.daily.toLocaleString()}
              </h3>
              <p style={{color: '#5a4f42'}}>Aktive Nutzer (täglich)</p>
            </div>

            {/* Engagement Rate */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
                  <TrendingUp className="h-6 w-6" style={{color: '#f9f7f4'}} />
                </div>
                <span className="text-sm font-medium text-green-600">+8.3%</span>
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {userAnalytics.engagement.avgSessionDuration}
              </h3>
              <p style={{color: '#5a4f42'}}>Durchschnittliche Sitzungsdauer</p>
            </div>

            {/* Photo Uploads */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
                  <Camera className="h-6 w-6" style={{color: '#f9f7f4'}} />
                </div>
                <span className="text-sm font-medium text-green-600">+{photoGalleryMetrics.uploads.growth}%</span>
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {photoGalleryMetrics.uploads.thisWeek}
              </h3>
              <p style={{color: '#5a4f42'}}>Foto-Uploads (diese Woche)</p>
            </div>

            {/* Average Rating */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
                  <Star className="h-6 w-6" style={{color: '#f9f7f4'}} />
                </div>
                <span className="text-sm font-medium text-green-600">+0.2</span>
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {reviewMetrics.overview.averageRating}
              </h3>
              <p style={{color: '#5a4f42'}}>Durchschnittliche Bewertung</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Analytics Section */}
      <section className="py-12" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#3d3629'}}>Nutzer-Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* User Activity Chart */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#e8dbc7'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Nutzeraktivität</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData.userActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="users" stackId="1" stroke="#3d3629" fill="#b09e7e" />
                  <Area type="monotone" dataKey="sessions" stackId="1" stroke="#5a4f42" fill="#EDC9AF" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Geographic Distribution */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#e8dbc7'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Geografische Verteilung</h3>
              <div className="space-y-4">
                {userAnalytics.geographic.map((country, index) => (
                  <div key={country.country} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{backgroundColor: COLORS[index % COLORS.length]}}
                      ></div>
                      <span style={{color: '#3d3629'}}>{country.country}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold" style={{color: '#3d3629'}}>
                        {country.users.toLocaleString()}
                      </div>
                      <div className="text-sm" style={{color: '#5a4f42'}}>
                        {country.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Retention Metrics */}
          <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#e8dbc7'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Nutzer-Retention</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: '#3d3629'}}>
                  {userAnalytics.retention.day1}%
                </div>
                <p style={{color: '#5a4f42'}}>Tag 1 Retention</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: '#3d3629'}}>
                  {userAnalytics.retention.day7}%
                </div>
                <p style={{color: '#5a4f42'}}>Tag 7 Retention</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: '#3d3629'}}>
                  {userAnalytics.retention.day30}%
                </div>
                <p style={{color: '#5a4f42'}}>Tag 30 Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Analytics */}
      <section className="py-12" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#3d3629'}}>Community Foto-Galerie</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Category Distribution */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Kategorie-Verteilung</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={photoGalleryMetrics.categories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percentage}) => `${name} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {photoGalleryMetrics.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Trending Photos */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Trending Fotos</h3>
              <div className="space-y-4">
                {photoGalleryMetrics.trending.map((photo) => (
                  <div key={photo.id} className="flex items-center justify-between p-3 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                    <div>
                      <h4 className="font-semibold" style={{color: '#3d3629'}}>{photo.title}</h4>
                      <p className="text-sm" style={{color: '#5a4f42'}}>{photo.category}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm" style={{color: '#5a4f42'}}>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {photo.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        {photo.shares}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#f5f2e8'}}>
              <ThumbsUp className="h-8 w-8 mx-auto mb-3" style={{color: '#b09e7e'}} />
              <div className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {photoGalleryMetrics.interactions.totalLikes.toLocaleString()}
              </div>
              <p style={{color: '#5a4f42'}}>Gesamt Likes</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#f5f2e8'}}>
              <Share2 className="h-8 w-8 mx-auto mb-3" style={{color: '#b09e7e'}} />
              <div className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {photoGalleryMetrics.interactions.totalShares.toLocaleString()}
              </div>
              <p style={{color: '#5a4f42'}}>Gesamt Shares</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#f5f2e8'}}>
              <MessageSquare className="h-8 w-8 mx-auto mb-3" style={{color: '#b09e7e'}} />
              <div className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {photoGalleryMetrics.interactions.totalComments.toLocaleString()}
              </div>
              <p style={{color: '#5a4f42'}}>Gesamt Kommentare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Analytics */}
      <section className="py-12" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#3d3629'}}>Bewertungs-Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sentiment Analysis */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#e8dbc7'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Sentiment-Analyse</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span style={{color: '#3d3629'}}>Positiv</span>
                  </div>
                  <span className="font-bold" style={{color: '#3d3629'}}>{reviewMetrics.sentiment.positive}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{width: `${reviewMetrics.sentiment.positive}%`}}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span style={{color: '#3d3629'}}>Neutral</span>
                  </div>
                  <span className="font-bold" style={{color: '#3d3629'}}>{reviewMetrics.sentiment.neutral}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{width: `${reviewMetrics.sentiment.neutral}%`}}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span style={{color: '#3d3629'}}>Negativ</span>
                  </div>
                  <span className="font-bold" style={{color: '#3d3629'}}>{reviewMetrics.sentiment.negative}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{width: `${reviewMetrics.sentiment.negative}%`}}
                  ></div>
                </div>
              </div>
            </div>

            {/* Top Rated Items */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#e8dbc7'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Bestbewertete Artikel</h3>
              <div className="space-y-4">
                {reviewMetrics.topRated.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold" style={{color: '#3d3629'}}>{item.item}</h4>
                      <p className="text-sm" style={{color: '#5a4f42'}}>{item.reviews} Bewertungen</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-bold" style={{color: '#3d3629'}}>{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Response Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#e8dbc7'}}>
              <CheckCircle className="h-8 w-8 mx-auto mb-3" style={{color: '#b09e7e'}} />
              <div className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {reviewMetrics.overview.responseRate}%
              </div>
              <p style={{color: '#5a4f42'}}>Antwortrate</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#e8dbc7'}}>
              <Clock className="h-8 w-8 mx-auto mb-3" style={{color: '#b09e7e'}} />
              <div className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {reviewMetrics.overview.avgResponseTime}
              </div>
              <p style={{color: '#5a4f42'}}>Ø Antwortzeit</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#e8dbc7'}}>
              <Star className="h-8 w-8 mx-auto mb-3" style={{color: '#b09e7e'}} />
              <div className="text-2xl font-bold mb-1" style={{color: '#3d3629'}}>
                {reviewMetrics.overview.totalReviews.toLocaleString()}
              </div>
              <p style={{color: '#5a4f42'}}>Gesamt Bewertungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="py-12" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#3d3629'}}>KI-gestützte Empfehlungen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* User Preferences */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Nutzer-Präferenzen</h3>
              <div className="space-y-4">
                {aiRecommendations.userPreferences.map((pref, index) => (
                  <div key={index} className="p-3 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold" style={{color: '#3d3629'}}>{pref.preference}</h4>
                      <span className="text-sm font-medium" style={{color: '#5a4f42'}}>{pref.users}% der Nutzer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm" style={{color: '#5a4f42'}}>Engagement:</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{width: `${pref.engagement * 10}%`, backgroundColor: '#b09e7e'}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium" style={{color: '#3d3629'}}>{pref.engagement}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation Performance */}
            <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#f5f2e8'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>Empfehlungs-Performance</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className="h-6 w-6" style={{color: '#b09e7e'}} />
                    <span style={{color: '#3d3629'}}>Genauigkeit</span>
                  </div>
                  <span className="text-xl font-bold" style={{color: '#3d3629'}}>
                    {aiRecommendations.personalizedSuggestions.accuracy}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6" style={{color: '#b09e7e'}} />
                    <span style={{color: '#3d3629'}}>Click-Through-Rate</span>
                  </div>
                  <span className="text-xl font-bold" style={{color: '#3d3629'}}>
                    {aiRecommendations.personalizedSuggestions.clickThroughRate}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-6 w-6" style={{color: '#b09e7e'}} />
                    <span style={{color: '#3d3629'}}>Conversion Rate</span>
                  </div>
                  <span className="text-xl font-bold" style={{color: '#3d3629'}}>
                    {aiRecommendations.personalizedSuggestions.conversionRate}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6" style={{color: '#b09e7e'}} />
                    <span style={{color: '#3d3629'}}>Cross-Selling Erfolg</span>
                  </div>
                  <span className="text-xl font-bold" style={{color: '#3d3629'}}>
                    {aiRecommendations.crossSelling.successRate}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Impact */}
          <div className="p-6 rounded-lg shadow-sm text-center" style={{backgroundColor: '#f5f2e8'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#3d3629'}}>KI-Empfehlungen Umsatz-Impact</h3>
            <div className="text-4xl font-bold mb-2" style={{color: '#3d3629'}}>
              {aiRecommendations.crossSelling.revenueImpact}
            </div>
            <p style={{color: '#5a4f42'}}>Zusätzlicher Umsatz durch Cross-Selling (diese Woche)</p>
          </div>
        </div>
      </section>

      {/* Real-time Activity Feed */}
      <section className="py-12" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#3d3629'}}>Live-Aktivitäten</h2>
          
          <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor: '#e8dbc7'}}>
            <div className="space-y-4">
              {[
                { time: '2 Min', action: 'Neue Foto-Upload', user: 'Maria K.', details: 'Latte Art Foto in Kategorie "Coffee"' },
                { time: '5 Min', action: 'Bewertung abgegeben', user: 'Thomas M.', details: '5 Sterne für "Blue Bird Special"' },
                { time: '8 Min', action: 'Kommentar', user: 'Sarah L.', details: 'Kommentar zu "Cozy Corner Setup"' },
                { time: '12 Min', action: 'Neuer Nutzer', user: 'Alex R.', details: 'Registrierung abgeschlossen' },
                { time: '15 Min', action: 'Foto geliked', user: 'Emma W.', details: 'Like für "Matcha Ceremony"' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg" style={{backgroundColor: '#f5f2e8'}}>
                  <div className="text-sm font-medium" style={{color: '#5a4f42'}}>
                    {activity.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold" style={{color: '#3d3629'}}>
                      {activity.action} - {activity.user}
                    </div>
                    <div className="text-sm" style={{color: '#5a4f42'}}>
                      {activity.details}
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalyticsDashboardPage;