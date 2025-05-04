import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to')).toBeInTheDocument();
    expect(screen.getByText('Your Next Project')).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(<App />);
    expect(screen.getByText('Modern Tech Stack')).toBeInTheDocument();
    expect(screen.getByText('Fast Development')).toBeInTheDocument();
    expect(screen.getByText('Community Driven')).toBeInTheDocument();
  });

  it('renders footer with social links', () => {
    render(<App />);
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks).toHaveLength(3);
  });
});