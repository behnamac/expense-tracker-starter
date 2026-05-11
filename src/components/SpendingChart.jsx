import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#FD79A8', '#00CEC9', '#FDCB6E'];

function SpendingChart({ transactions, darkMode }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }));

  const tickColor    = darkMode ? '#404859' : '#A8B0BC';
  const tooltipBg    = darkMode ? '#1A1E28' : '#FFFFFF';
  const tooltipBorder = darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const cursorFill   = darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';

  if (data.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p className="chart-empty">No expense data yet.</p>
      </div>
    );
  }

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11.5, fill: tickColor, fontFamily: 'Outfit, sans-serif' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: tickColor, fontFamily: 'Outfit, sans-serif' }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, 'Amount']}
            contentStyle={{
              background: tooltipBg,
              border: `1px solid ${tooltipBorder}`,
              borderRadius: '10px',
              fontSize: '13px',
              fontFamily: 'Outfit, sans-serif',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              color: darkMode ? '#DDE1EA' : '#141416',
            }}
            cursor={{ fill: cursorFill }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
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
