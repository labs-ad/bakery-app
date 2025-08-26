/**
 * Test suite for the Home page component
 * Verifies basic page rendering and Next.js App Router functionality
 */

import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('HomePage Component', () => {
  it('should render without crashing', () => {
    render(<HomePage />)
    expect(screen.getByText(/dadalicious/i)).toBeInTheDocument()
  })

  it('should have proper page title', () => {
    render(<HomePage />)
    expect(screen.getByText(/dadalicious/i)).toBeInTheDocument()
  })

  it('should have main content', () => {
    render(<HomePage />)
    expect(screen.getByText(/handmade, egg-free cakes/i)).toBeInTheDocument()
  })

  it('should have responsive design classes', () => {
    const { container } = render(<HomePage />)
    const mainElement = container.firstChild as HTMLElement
    expect(mainElement.className).toContain('min-h-screen')
  })

  it('should have call-to-action buttons', () => {
    render(<HomePage />)
    expect(screen.getByText(/order now/i)).toBeInTheDocument()
    expect(screen.getByText(/view menu/i)).toBeInTheDocument()
  })
})
