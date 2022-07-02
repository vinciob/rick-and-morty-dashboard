import { render, screen } from '@testing-library/react';
import PaginationLink from './pagination'
import '@testing-library/jest-dom'

/*-------------------------------------------------------*/

test('Check Pagination in the firse page', () => {
  render(<PaginationLink page={1} setPage={ () => 1 } allPages={50} />)
  
  const nextPage = screen.getByTestId('next-page')
  const currentPage = screen.getByText(/page 1/i)
  const prevPage = screen.getByTestId('prev-page')
  
  expect(nextPage).toHaveTextContent(/next page/i)
  expect(currentPage).toBeInTheDocument()
  expect(prevPage).toBeEmptyDOMElement()
})

/*-------------------------------------------------------*/

test('Check Pagination in the last page', () => {
  render(<PaginationLink page={50} setPage={ () => 50 } allPages={50} />)
  
  const nextPage = screen.getByTestId('next-page')
  const currentPage = screen.getByText(/page 50/i)
  const prevPage = screen.getByTestId('prev-page')
  
  expect(nextPage).toBeEmptyDOMElement()
  expect(currentPage).toBeInTheDocument()
  expect(prevPage).toHaveTextContent(/prev page/i)
})

/*-------------------------------------------------------*/

test('Check Pagination in a middle page', () => {
  render(<PaginationLink page={25} setPage={ () => 25 } allPages={50} />)
  
  const nextPage = screen.getByTestId('next-page')
  const currentPage = screen.getByText(/page 25/i)
  const prevPage = screen.getByTestId('prev-page')
  
  expect(nextPage).toHaveTextContent(/next page/i)
  expect(currentPage).toBeInTheDocument()
  expect(prevPage).toHaveTextContent(/prev page/i)
})


