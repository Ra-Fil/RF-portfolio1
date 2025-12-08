
import React from 'react';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}