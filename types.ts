
import React from 'react';

export interface NewsItem {
  id: string | number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  author_name: string;
  created_at?: string;
}

export enum Page {
  HOME = 'HOME',           // Landing & Profile
  PROFIL = 'PROFIL',       // Full School Profile
  GURU = 'GURU',           // Teachers & Staff
  KEGIATAN = 'KEGIATAN',   // Activities & Ops
  PRESTASI = 'PRESTASI',   // Achievements
  BERITA = 'BERITA',       // Blog/News
  GALERI = 'GALERI',       // Visual Gallery
  PPDB = 'PPDB',           // Admission Hub
  SIAKAD = 'SIAKAD',       // Academic Portal
  LIBRARY = 'LIBRARY',     // Digital Library
  ALUMNI = 'ALUMNI',       // Alumni Network
  AI_HUB = 'AI_HUB',       // Creative AI Lab
  SCHOLAR = 'SCHOLAR',     // AI Tutor Hub
  ADMIN = 'ADMIN'
}
