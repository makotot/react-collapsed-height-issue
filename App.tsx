import * as React from 'react';
import useCollapse from 'react-collapsed';
import './style.css';

export default function App() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const [itemsCounter, updateItemsCount] = React.useState(1);

  return (
    <div>
      <div>
        <div>Total of items: {itemsCounter}</div>
        <button onClick={() => updateItemsCount((prev) => prev + 1)}>
          + 1
        </button>
      </div>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        toggle
      </button>
      <div style={{ marginTop: '1rem' }}>
        <div {...getCollapseProps({})}>
          {Array(itemsCounter)
            .fill(true)
            .map((_, index) => {
              return (
                <div
                  style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                  }}
                  key={index}
                >
                  {index + 1}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
