import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#e15759', '#f28e2b', '#4e79a7', '#76b7b2', '#59a14f', '#edc948', '#b07aa1'];

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p className="chart-empty">No expense data to display.</p>
      </div>
    );
  }

  const formatTooltip = (value) => `$${value.toFixed(2)}`;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 4 }}>
          <XAxis dataKey="name" tick={{ fontSize: 13 }} />
          <YAxis tickFormatter={(v) => `$${v}`} tick={{ fontSize: 12 }} />
          <Tooltip formatter={formatTooltip} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
