import React from 'react';
import '../styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const RankTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.rank);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Ranks</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('country')}
              className={getClassNamesFor('country')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('need')}
              className={getClassNamesFor('need')}
            >
              Need
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('infrastructure')}
              className={getClassNamesFor('infrastructure')}
            >
              Infrastructure
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('government')}
              className={getClassNamesFor('government')}
            >
              Government
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.country}</td>
            <td>{item.need}</td>
            <td>{item.infrastructure}</td>
            <td>{item.government}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, Country: 'Sudan', Need: 1, Infrastructure: 9, Government: 8},
          { id: 2, Country: 'South Sudan', Need: 2, Infrastructure: 8, Government: 9},
          { id: 3, Country: 'Sierra Leone', Need: 3, Infrastructure: 6, Government: 2},
          { id: 4, Country: 'Niger', Need: 4, Infrastructure: 7, Government: 5},
          { id: 5, Country: 'Zimbabwe', Need: 5, Infrastructure: 4, Government: 6},
          { id: 6, Country: 'El Salvador', Need: 6, Infrastructure: 3, Government: 2},
          { id: 7, Country: 'Honduras', Need: 7, Infrastructure: 5, Government: 6},
          { id: 8, Country: 'Philippines', Need: 8, Infrastructure: 2, Government: 4},
          { id: 9, Country: 'Colombia', Need: 9, Infrastructure: 1, Government: 1},
        ]}
      />
    </div>
  );
}
