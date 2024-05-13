import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import VirtualScroll from './index.js';

// Mock Component to pass into VirtualScroll
const MockComponent = ({ value }) => <div>{value}</div>;

describe('VirtualScroll', () => {
  const items = Array.from({ length: 20 }, (_, i) => ({ value: `Item ${i + 1}` }));

  it('renders without crashing', () => {
    const { container } = render(
      <VirtualScroll
        items={items}
        itemHeight={200}
        itemWidth={200}
        numColumns={5}
        numRows={4}
        windowHeight={800}
        Component={MockComponent}
      />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the correct number of items', () => {
    const { getAllByText } = render(
      <VirtualScroll
        items={items}
        itemHeight={200}
        itemWidth={200}
        numColumns={5}
        numRows={4}
        windowHeight={800}
        Component={MockComponent}
      />
    );
    expect(getAllByText(/Item/i)).toHaveLength(items.length);
  });

  it('scrolls correctly', () => {
    const { container, getByText } = render(
      <VirtualScroll
        items={items}
        itemHeight={200}
        itemWidth={200}
        numColumns={5}
        numRows={4}
        windowHeight={800}
        Component={MockComponent}
      />
    );
    act(() => {
      fireEvent.scroll(container.firstChild, { target: { scrollTop: 1000 } });
    });
    expect(getByText('Item 20')).toBeInTheDocument();
  });
});