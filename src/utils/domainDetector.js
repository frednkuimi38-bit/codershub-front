import { poles } from '../data/poles.js';

export const detectCurrentPole = () => {
  if (typeof window === 'undefined') return null;
  
  const hostname = window.location.hostname;
  
  // En production, détecter le sous-domaine
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    const subdomain = hostname.split('.')[0];
    return poles.find(pole => pole.id === subdomain) || null;
  }
  
  // En développement, détecter le chemin
  const path = window.location.pathname;
  const pathSegment = path.split('/')[1];
  
  return poles.find(pole => pole.id === pathSegment) || null;
};

export const getPoleById = (id) => {
  return poles.find(pole => pole.id === id) || null;
};

export const getPoleColor = (poleId) => {
  const pole = getPoleById(poleId);
  return pole ? pole.color : 'primary';
};
